import { Card } from "@/components/ui/Dashboard/Card";
import { Chart } from "@/components/ui/Dashboard/Chart";
import { Rightbar } from "@/components/ui/Dashboard/Rightbar";
import { Transactions } from "@/components/ui/Dashboard/Transactions";
import { cards } from "@/lib/data";
import styles from "@/components/ui/Dashboard/dashboard.module.css";


const Dashboard = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.main}>
                <div className={styles.cards}>
                    {cards.map((item) => (
                        <Card item={item} key={item.id} />
                    ))}
                </div>
                <Transactions />
                <Chart />
            </div>
            <div className={styles.side}>
                <Rightbar />
            </div>
        </div>
    );
};

export default Dashboard;