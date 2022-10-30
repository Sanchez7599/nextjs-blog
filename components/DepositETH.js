import { useState } from "react"
import { ethers } from "ethers"
import styles from "../styles/Home.module.css"
import ErrorMessage from "../constants/ErrorMessage"

const startPayment = async ({ setError, setTxs, ether }) => {
    try {
        if (!window.ethereum)
            throw new Error("No crypto wallet found. Please install it.")

        await window.ethereum.send("eth_requestAccounts")
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        const address = ethers.utils.getAddress(
            "0x623D77887D4de5Fb8b8a7B2aFe16afA90cE1f0dB"
        )
        const tx = await signer.sendTransaction({
            to: address,
            value: ethers.utils.parseEther(ether),
        })
        console.log({ ether, address })
        console.log("tx", tx)
    } catch (err) {
        setError(err.message)
    }
}

export default function DepositETH() {
    const [error, setError] = useState()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = new FormData(e.target)
        setError()
        await startPayment({
            setError,
            ether: data.get("ether"),
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className={styles.form}>
                <main>
                    <h1 class="block mb-2 text-2xl font-medium text-gray-900 dark:text-gray-300">
                        Get started by depositing some ETH
                    </h1>
                    <div>
                        <div>
                            <input
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                name="ether"
                                type="text"
                                placeholder="Amount in ETH"
                            />
                        </div>
                    </div>
                </main>
                <footer>
                    <button
                        type="submit"
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-5"
                    >
                        Desposit
                    </button>
                    <ErrorMessage message={error} />
                </footer>
            </div>
        </form>
    )
}
