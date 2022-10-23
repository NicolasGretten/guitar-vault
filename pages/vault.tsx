import type { NextPage } from 'next'
import Layout from "./components/layout";
import VaultBody from "./components/vaultBody";

const Vault: NextPage = () => {
    return (
        <Layout>
            <VaultBody />
        </Layout>
    )
}

export default Vault
