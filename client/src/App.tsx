import { useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import Portfolio from "@/pages/portfolio";
import ProjectsPage from "@/pages/projects-page";
import ProjectDetail from "@/pages/project-detail";
import NotFound from "@/pages/not-found";
import { useIsMobile } from "@/hooks/use-mobile";
import { useScrollRestoration } from "@/hooks/use-scroll-restoration";
import Lenis from "lenis";

function ScrollToTop() {
    const { pathname } = useLocation();
    const prevPathnameRef = useRef<string>(pathname);
    
    useScrollRestoration();

    useEffect(() => {
        // Check if there's a saved scroll position (indicates back navigation)
        const savedScrollPosition = sessionStorage.getItem(`scroll-position-${pathname}`);
        
        // If no saved position or it's a new page, scroll to top
        // If there's a saved position, it will be restored by useScrollRestoration hook
        if (!savedScrollPosition) {
            window.scrollTo(0, 0);
        }
        
        prevPathnameRef.current = pathname;
    }, [pathname]);

    return null;
}

function App() {
    const isMobile = useIsMobile();

    useEffect(() => {
        // Only initialize Lenis on desktop for better mobile performance
        if (isMobile) return;

        const lenis = new Lenis();

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, [isMobile]);
    return (
        <QueryClientProvider client={queryClient}>
            <Router>
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<Portfolio />} />
                    <Route path="/projects" element={<ProjectsPage />} />
                    <Route path="/projects/:id" element={<ProjectDetail />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Router>
            <Toaster />
        </QueryClientProvider>
    );
}

export default App;