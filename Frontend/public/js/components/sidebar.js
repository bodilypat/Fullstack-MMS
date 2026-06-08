//public/js/components/sidebar.js
const   sidebarItems = [
    {
        id: "dashboard",
        title: "Dashboard",
        icon: "",
        route: "/pages/dashboard/dashboard.html",
        roles: ["admin", "doctor", "nurse", "receptionist"],
    },

    {
        id: " patients",
        title: "Patient Manament",
        icon: "",
        expended: true,
        roles: ["admin", "doctor", "nurse", "receptionist"],

        children: [
            {
                title: "Add Patient",
                route: "pages/dashboard/patients.html?action=create",
            },
            {
                title: "View Patients",
                route:"/pages/dashboard/patients.html"
            },
            {
                title: "Patient Profile",
                route:"/pages/dashboard/patient-profile.html"
            },
            {
                title: "Patient History",
                route: "/pages/dashboard/patient-history.html",
            },
        ],
    },

    {
        id: "doctors",
        title: "Doctor Management",
        icon: " ",
        roles: ["admin"],

        children: [
            {
                title: "Add Doctor",
                route: "pages/dashboard/doctors.html?action=create",
            },
            {
                title: "Doctor Profiles",
                route: "pages/dashboard/doctors.html",
            },
            {
                title: "Doctor Schedule",
                route:"/pages/dashboard/doctor-schedule.htnl",
            },
            {
                title: "Availability Status",
                route: "/pages/dashboard/availability.html",
            },
        ],
    },

    {
        id: "appointments",
        title: "Appointment Management",
        icon: " ",

        children: [
            {
                title: "Book Appointment",
                route: "/pages/dashboard/appointment?action=create",
            },
            {
                title: "Appointment Calendar",
                route: "/pages/dashboard/calendar.html",
            },
            {
                title: "Appointment History",
                route: "/pages/dashboard/appointment-history.html",
            },
        ],
    },

    {
        id: "medical-records",
        title: "Medical Records",
        icon: " ",

        children: [
            {
                title: "Diagnosis",
                route: "pages/dashboard/medical-records.html"
            },
            {
                title: "Treatment Plan",
                route: "/pages/dashboard/treatments.html"
            },
            {
                title: "clinical Notes",
                route: "/pages/dashboard/clinical-notes.html",
            },
            {
                title: "Patient Documents",
                route: "/pages/dashboard/docunents.html"
            },
        ],
    },

    {
        id: "prescriptions",
        title: "Prescription Management",
        icon: " ",

        children:[
            {
                title: "Create Prescription",
                route: "/pages/dashboard/prescription.html?action=create",
            },
            {
                title: "View Prescriptions",
                route: "/pages/dashboard/prescriptions.html",
            },
            {
                title: "Prescription History",
                route: "/page/dashboard/prescription-history.html",
            },
        ],
    },

    {
        id: "laabboratory",
        title: "Laboratory",
        icon: " ",

        children: [
            {
                title: "Lab REquests",
                route: "/pages/dashboard/laboratory.htnl",
            },
            {
                title: "Sample Collection",
                route: "/pages/dashboard/sample-collection.html",
            },
            {
                title: "Test Results",
                route: "/pages/dashboard/test-results.html",
            },
        ],
    },
    {
        id: "pharmacy",
        title: "Pharmacy",
        icon: " ",

        children: [
            {
                title: "Inventory",
                route: "/pages/dashboard/pharmacy.html",
            },
            {
                title: "Dispense Medicine",
                route: "/pages/dashboard/dispense.html",
            },
            {
                title: " Expiry Tracking",
                route: "/pages/dashboard/expiry.html",
            },
        ],
    },

    {
        id: "billing",
        title: "Billing & Invoices",
        icon: " ",

        children: [
            {
                title: "Generate Invoice",
                route:"pages/dashboard/biling.html",
            },
            {
                title: "Payments",
                route: "/pages/dashboard/payments.html",
            },
            {
                title: "Insurance Claims",
                route: "/pages/dashboard/claims.html",
            },
        ],
    },

    {
        id: "reports",
        title: "Reports & Analytics",
        icon: " ",

        children: [
            {
                title: "Patient Reports",
                route: "/pages/dashbord/reports.html?type=patients",
            },
            {
                title: "Revenue Reports",
                route: "/pages/dashboard/reports.html?type=revenue",
            },
            {
                title: "Dashboard Analytics",
                route: "/pages/dashboard/analytics.html"
            },
        ],
    },

    {
        id: "notifications",
        title: "Notifications",
        icon: " ",

        children: [
            {
                title: "Appointment Reminders",
                route: "/pages/dashboard/notifications.html",
            },
            {
                title: "System Messages",
                route: "/pages/dashboard/messages.html",
            },
        ],
    },

    {
        id: "settings",
        title: "Settings",
        icon: " ",

        children: [
            {
                title: "User Profile",
                route: "/pages/auth/profile.html",
            },
            {
                title: "Roles & Permissions",
                route: "/pages/dashboard/roles.html"
            },
            {
                title: "Security",
                route: "/pages/dashboard/security.html"
            },
        ],
    },
];

export default sidebarItems;
