import { Header } from '../components/Header';
import { FormConfig } from '../components/FormConfig';

export default function Home() {

  return (
    <section className="flex flex-col items-center justify-center min-h-screen p-4">
      <Header />
      <FormConfig />
    </section>
  )
}
