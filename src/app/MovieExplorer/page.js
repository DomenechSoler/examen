import Peliculas from '../../miscomponentes/Peliculas';

export default function MovieExplorerPage() {
  return (
    <section className="max-w-7xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-3xl font-bold mb-4 text-black">Movie Explorer</h2>
      <Peliculas />
    </section>
  );
}