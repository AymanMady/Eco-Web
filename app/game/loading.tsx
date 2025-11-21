export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
      <span className="loading loading-spinner loading-lg text-primary"></span>
      <p className="text-xl font-medium">Chargement des choix techniques...</p>
      <p className="text-sm opacity-60">Préparation du simulateur Green IT</p>
    </div>
  );
}

