import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { insertProjectSchema, type InsertProject, type Project } from '@shared/schema';
import { useToast } from '@/hooks/use-toast';
import { 
  Loader2, Plus, Pencil, Trash2, LogOut, X, Save 
} from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

export default function AdminDashboard() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);

  const token = localStorage.getItem('admin_token');

  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, [token, navigate]);

  const { data: projects, isLoading } = useQuery<Project[]>({
    queryKey: ['projects'],
    queryFn: async () => {
      const res = await fetch('/api/projects');
      if (!res.ok) throw new Error('Failed to fetch projects');
      return res.json();
    }
  });

  const form = useForm<InsertProject>({
    resolver: zodResolver(insertProjectSchema),
    defaultValues: {
      title: '',
      description: '',
      content: '',
      image: '',
      technologies: [],
      liveUrl: '',
      githubUrl: '',
      category: 'Frontend',
      featured: false
    }
  });

  const createMutation = useMutation({
    mutationFn: async (data: InsertProject) => {
      const res = await fetch('/api/projects', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(data)
      });
      if (!res.ok) throw new Error('Failed to create project');
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projects'] });
      toast({ title: 'Success', description: 'Project created successfully' });
      setIsDialogOpen(false);
      form.reset();
    },
    onError: () => {
      toast({ variant: 'destructive', title: 'Error', description: 'Failed to create project' });
    }
  });

  const updateMutation = useMutation({
    mutationFn: async ({ id, data }: { id: number, data: InsertProject }) => {
      const res = await fetch(`/api/projects/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(data)
      });
      if (!res.ok) throw new Error('Failed to update project');
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projects'] });
      toast({ title: 'Success', description: 'Project updated successfully' });
      setIsDialogOpen(false);
      setEditingProject(null);
      form.reset();
    },
    onError: () => {
      toast({ variant: 'destructive', title: 'Error', description: 'Failed to update project' });
    }
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: number) => {
      const res = await fetch(`/api/projects/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (!res.ok) throw new Error('Failed to delete project');
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projects'] });
      toast({ title: 'Success', description: 'Project deleted successfully' });
    },
    onError: () => {
      toast({ variant: 'destructive', title: 'Error', description: 'Failed to delete project' });
    }
  });

  const onSubmit = (data: InsertProject) => {
    // Ensure technologies is an array of strings (handle comma separated string if coming from simple input)
    // Here we are using React Hook Form which should handle it if we set up inputs correctly
    // or we transform it.
    // For simplicity, let's assume we implement a simple comma-separated text input for technologies
    
    // NOTE: The zod schema expects array of strings for 'technologies'.
    
    if (editingProject) {
      updateMutation.mutate({ id: editingProject.id, data });
    } else {
      createMutation.mutate(data);
    }
  };

  const handleEdit = (project: Project) => {
    setEditingProject(project);
    form.reset({
        title: project.title,
        description: project.description,
        content: project.content || '',
        image: project.image,
        technologies: project.technologies,
        liveUrl: project.liveUrl,
        githubUrl: project.githubUrl,
        category: project.category as any,
        featured: project.featured
    });
    setIsDialogOpen(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Project Management
          </h1>
          <div className="flex gap-4">
            <Dialog open={isDialogOpen} onOpenChange={(open) => {
              setIsDialogOpen(open);
              if (!open) {
                setEditingProject(null);
                form.reset({
                  title: '',
                  description: '',
                  content: '',
                  image: '',
                  technologies: [],
                  liveUrl: '',
                  githubUrl: '',
                  category: 'Frontend',
                  featured: false
                });
              }
            }}>
              <DialogTrigger asChild>
                <Button className="bg-primary hover:bg-primary/90">
                  <Plus className="w-4 h-4 mr-2" /> Add Project
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-slate-900 border-slate-700 text-white max-h-[90vh] overflow-y-auto max-w-4xl scroll-smooth" data-lenis-prevent>
                <DialogHeader>
                  <DialogTitle>{editingProject ? 'Edit Project' : 'Add New Project'}</DialogTitle>
                </DialogHeader>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 py-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-2">
                        <label className="text-sm font-medium text-gray-400">Title</label>
                        <Input {...form.register('title')} className="bg-slate-800 border-slate-700" placeholder="Project Title" />
                        {form.formState.errors.title && <p className="text-red-500 text-xs mt-1">{form.formState.errors.title.message}</p>}
                    </div>
                    
                    <div className="col-span-2">
                        <label className="text-sm font-medium text-gray-400">Description (Short)</label>
                        <Textarea {...form.register('description')} className="bg-slate-800 border-slate-700" placeholder="Short description for cards" rows={2} />
                        {form.formState.errors.description && <p className="text-red-500 text-xs mt-1">{form.formState.errors.description.message}</p>}
                    </div>

                    <div className="col-span-2">
                        <label className="text-sm font-medium text-gray-400">Content (Full Markdown)</label>
                        <Textarea {...form.register('content')} className="bg-slate-800 border-slate-700 font-mono text-sm" placeholder="# Project Details..." rows={6} />
                        {form.formState.errors.content && <p className="text-red-500 text-xs mt-1">{form.formState.errors.content.message}</p>}
                    </div>

                    <div className="col-span-2">
                        <label className="text-sm font-medium text-gray-400">Image URL</label>
                        <Input {...form.register('image')} className="bg-slate-800 border-slate-700" placeholder="https://..." />
                         {form.formState.errors.image && <p className="text-red-500 text-xs mt-1">{form.formState.errors.image.message}</p>}
                    </div>

                    <div>
                        <label className="text-sm font-medium text-gray-400">Live URL</label>
                        <Input {...form.register('liveUrl')} className="bg-slate-800 border-slate-700" placeholder="https://..." />
                         {form.formState.errors.liveUrl && <p className="text-red-500 text-xs mt-1">{form.formState.errors.liveUrl.message}</p>}
                    </div>

                    <div>
                        <label className="text-sm font-medium text-gray-400">GitHub URL</label>
                        <Input {...form.register('githubUrl')} className="bg-slate-800 border-slate-700" placeholder="https://..." />
                         {form.formState.errors.githubUrl && <p className="text-red-500 text-xs mt-1">{form.formState.errors.githubUrl.message}</p>}
                    </div>

                     <div className="col-span-2">
                        <label className="text-sm font-medium text-gray-400">Technologies (comma separated)</label>
                        <Input 
                            defaultValue={form.getValues('technologies')?.join(', ')}
                            onChange={(e) => {
                                const val = e.target.value.split(',').map(s => s.trim()).filter(Boolean);
                                form.setValue('technologies', val);
                            }}
                            className="bg-slate-800 border-slate-700" 
                            placeholder="React, TypeScript, Tailwind" 
                        />
                         {form.formState.errors.technologies && <p className="text-red-500 text-xs mt-1">{form.formState.errors.technologies.message}</p>}
                    </div>

                    <div>
                         <label className="text-sm font-medium text-gray-400">Category</label>
                         <Select 
                            onValueChange={(val) => form.setValue('category', val as any)} 
                            defaultValue={form.getValues('category')}
                        >
                            <SelectTrigger className="bg-slate-800 border-slate-700">
                                <SelectValue placeholder="Select Category" />
                            </SelectTrigger>
                            <SelectContent className="bg-slate-800 border-slate-700 text-white">
                                <SelectItem value="Frontend">Frontend</SelectItem>
                                <SelectItem value="Fullstack">Fullstack</SelectItem>
                                <SelectItem value="Mobile Apps">Mobile Apps</SelectItem>
                                <SelectItem value="Games">Games</SelectItem>
                            </SelectContent>
                         </Select>
                    </div>

                    <div className="flex items-center space-x-2 pt-4">
                        <Checkbox 
                            id="featured" 
                            checked={form.watch('featured')}
                            onCheckedChange={(checked) => form.setValue('featured', checked as boolean)}
                            className="border-slate-500 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                        />
                        <label
                            htmlFor="featured"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            Feature on Home Page
                        </label>
                    </div>
                  </div>

                  <div className="flex justify-end gap-2 mt-6">
                    <Button type="button" variant="ghost" onClick={() => setIsDialogOpen(false)}>Cancel</Button>
                    <Button type="submit" disabled={createMutation.isPending || updateMutation.isPending} className="bg-primary">
                        {(createMutation.isPending || updateMutation.isPending) && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
                        Save Project
                    </Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>

            <Button variant="outline" className="border-red-900 text-red-500 hover:bg-red-900/20" onClick={handleLogout}>
              <LogOut className="w-4 h-4 mr-2" /> Logout
            </Button>
          </div>
        </div>

        {/* Project List */}
        {isLoading ? (
            <div className="flex justify-center p-20">
                <Loader2 className="w-10 h-10 animate-spin text-primary" />
            </div>
        ) : (
            <div className="grid gap-4">
                {projects?.map((project) => (
                    <div key={project.id} className="bg-slate-900 border border-slate-800 p-4 rounded-xl flex items-center justify-between group hover:border-slate-700 transition-colors">
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 rounded-lg overflow-hidden bg-slate-800 flex-shrink-0">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">{project.title}</h3>
                                <div className="flex items-center gap-2 text-sm text-gray-400">
                                    <span className="px-2 py-0.5 rounded-full bg-slate-800 text-xs">{project.category}</span>
                                    {project.featured && <span className="px-2 py-0.5 rounded-full bg-accent/20 text-accent text-xs">Featured</span>}
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity">
                            <Button size="icon" variant="ghost" className="hover:bg-slate-800 hover:text-blue-400" onClick={() => handleEdit(project)}>
                                <Pencil className="w-4 h-4" />
                            </Button>
                            
                            <AlertDialog>
                                <AlertDialogTrigger asChild>
                                    <Button size="icon" variant="ghost" className="hover:bg-slate-800 hover:text-red-500">
                                        <Trash2 className="w-4 h-4" />
                                    </Button>
                                </AlertDialogTrigger>
                                <AlertDialogContent className="bg-slate-900 border-slate-800 text-white">
                                    <AlertDialogHeader>
                                        <AlertDialogTitle>Delete Project?</AlertDialogTitle>
                                        <AlertDialogDescription className="text-gray-400">
                                            This action cannot be undone. This will permanently delete "{project.title}".
                                        </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                        <AlertDialogCancel className="bg-slate-800 border-slate-700 hover:bg-slate-700 hover:text-white">Cancel</AlertDialogCancel>
                                        <AlertDialogAction className="bg-red-600 hover:bg-red-700 text-white border-none" onClick={() => deleteMutation.mutate(project.id)}>Delete</AlertDialogAction>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>
                        </div>
                    </div>
                ))}
            </div>
        )}
      </div>
    </div>
  );
}
