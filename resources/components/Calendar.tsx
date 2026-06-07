import { CalendarEvent } from "../types";

const eventTypeStyles: Record<string, string> = {
  RDV: 'bg-red-50 border-red-500 dark:bg-red-900/20',
  Aide: 'bg-green-50 border-green-500 dark:bg-green-900/20',
  Medoc: 'bg-orange-50 border-orange-500 dark:bg-orange-900/20',
  Autre: 'bg-blue-50 border-blue-500 dark:bg-blue-900/20',
};

const badgeStyles: Record<string, string> = {
  RDV: 'bg-red-500 text-white',
  Aide: 'bg-green-500 text-white',
  Medoc: 'bg-orange-500 text-white',
  Autre: 'bg-blue-500 text-white',
};

interface CalendarProps {
  events: CalendarEvent[];
}

export default function Calendar({ events }: CalendarProps) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Filtrer les événements d'aujourd'hui
  const todayEvents = events.filter(e => {
    const eventDate = new Date(e.date);
    eventDate.setHours(0, 0, 0, 0);
    return eventDate.getTime() === today.getTime();
  });

  const typeLabels: Record<string, string> = {
    RDV: 'Rendez-vous',
    Aide: 'Aide à domicile',
    Medoc: 'Médicaments',
    Autre: 'Autre',
  };


  if (todayEvents.length === 0) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-10 text-center">
        <div className="text-4xl mb-4">📭</div>
        <p className="text-gray-600 dark:text-gray-400 font-medium">
          Aucune tâche prévue aujourd’hui
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {todayEvents.map(event => {
        const heure = event.heureF
          ? `${event.heureD.substring(0, 5)} - ${event.heureF.substring(0, 5)}`
          : event.heureD.substring(0, 5);

        return (
          <div
            key={event.id}
            className={`relative p-4 rounded-2xl border-l-4 ${eventTypeStyles[event.type]} shadow-sm`}
          >
            <span
              className={`absolute top-2 right-2 px-3 py-1 text-xs font-bold rounded-full ${badgeStyles[event.type]}`}
            >
              {typeLabels[event.type]}
            </span>

            <div className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-1">
              {heure}
            </div>

            <h3 className="text-md font-semibold text-gray-800 dark:text-white">
              {event.titre}
            </h3>
            {event.description && (
              <p className="text-gray-600 dark:text-gray-300 text-sm">{event.description}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}

