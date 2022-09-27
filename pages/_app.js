import Layout from "../components/Layout";
import { AuthProvider } from "../context/AuthContext";
import { FirestoreProvider } from "../context/FirestoreContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <FirestoreProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </FirestoreProvider>
    </AuthProvider>
  );
}

export default MyApp;
