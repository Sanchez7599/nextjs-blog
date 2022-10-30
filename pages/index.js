import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import DepositETH from "../components/DepositETH.js"

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>SamayoWorld</title>
                <meta name="description" content="SamayoWorld token presale" />
                <link rel="icon" href="/SamayoWorldIcon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>SamayoWorld token presale!</h1>

                <img
                    className={styles.img}
                    src="SamayoWorldLogo.jpg"
                    width={500}
                />

                <div>
                    <DepositETH />
                </div>

                <p className={styles.description}>
                    Fill out this{" "}
                    <a
                        href="https://form.jotform.com/222986233495365"
                        className={styles.a}
                    >
                        form
                    </a>{" "}
                    to get a pre sale prize!
                </p>
            </main>
            <footer className={styles.footer}>Created by Xiao Sok.</footer>
        </div>
    )
}
