import { Navbar } from "@/components/ui/Dashboard/Navbar";
import { Sidebar } from "@/components/ui/Dashboard/Sidebar";
import styles from "../../components/ui/Dashboard/dashboard.module.css";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className={styles.container}>
            <div className={styles.menu}>
                <Sidebar />
            </div>
            <div className={styles.content}>
                <Navbar />
                {children}
            </div>
        </div>
    )
}
