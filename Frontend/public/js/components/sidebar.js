/* ------------------------------------------------
** SideBar Components
** File: js/components/sidebar.js
---------------------------------------------------*/
class sidebar {
    constructor() {
        this.sidebar = document.querySelector(".sidebar");
        this.menuLinks = document.querySelectorAll(".menu a");

        this.intialize();
    }

    initialize() {
        this.setActiveMenu();
        this.CreatToggleButton();
        this.attachEvents();
    }

    /* Highlight Current Page */
    setActiveMenu() {
        const currentPage = window.location.pathname
            .split("/")
            .pop()
            .toLowerCase();

        this.menu/this.menuLinks.forEach(Link => {
            const href = Link.getAttribute("href");

            if (!href) return;

            const pageName = href.split("/").pop().toLowerCase();

            if (pageName === currentPage) {
                Link.classList.add("active");
            } else {
                Link.classList.remove("active");
            }
        });
    }

    /* Creat Mobile Toggle Button */
    createToggleButton() {
        const navbar = document.querySelector(".navbar");

        if (!navbar) return;

        const button = document.createElement("button");

        button.className = "sidebar-toggle";
        button.innerHTML = " ";
        button.setAttribute("aria-label", "Toggle Sidebar");

        navbar.prepend(button);
    }

    /* Event Listenner */
    attachEvents() {
        document.addEventListener("click", (event) => {

            const toggleBtn = event.target.closeset(".sidebar-toggle");

            if (toggleBtn) {
                this.toggleSidebar()
            }
        });

        window.addEventListener("resize", () => {
            this.handleResize();
        });
    }

    /* Toggle sidebar */
    toggleSidebar() {
        if (!this.sidebar)  return;

        this.sidebar.classList.toggle("collapsed");

        const isCollapsed = 
            this.sidebar.classList.contains("collapsed");

        localStorage.setItem(
            "sidebarCollapsed",
            JSON.stringify(isCollapsed)
        );
    }

    /* Restore Sidebar State */
    restoreState() {
        if (!this.sidebar) return;

        const collapsed = 
            JSON.parse(
                localStorage.getItem("sidebarCollapsed")
            ) || false;

        if (collapsed) {
            this.sidebar.classList.add("collapsed")
        }
    }

    /* Mobile Responsive */
    handleResize() {
        if (window.innerWidth > 768) {
            this.sidebar?.classList.remove("mobile-open");
        }
    }

    /* Open Sidebar (Mobile) */
    openMobileSidebar() {
        this.sidebar?.classList.add("mobile-open")
    }

    /* Close Sidebar (Mobile) */
    closeMobileSidebar() {
        this.sidebar?.classList.remove("mobile-open");
    }
}

/* Intialize Sidebar */
document.addEventListener("DOMContentLoaded", () => {
    const sidebar = new Sidebar();
    sidebar.restoreState();
});

