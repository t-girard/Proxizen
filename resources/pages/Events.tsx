import { useState, useEffect } from "react";
import { useForm, router } from "@inertiajs/react";
import { Event } from "../types";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import { EventInput } from "@fullcalendar/core";
import ProxizenLayout from '@/layouts/ProxizenLayout';
import frLocale from '@fullcalendar/core/locales/fr';

interface Props {
  events: Event[];
  auth: any;
}

export default function EventsPage({ events: initialEvents, auth }: Props) {
  const [modalOpen, setModalOpen] = useState(false);
  const [eventToEdit, setEventToEdit] = useState<Event | null>(null);
  const [notification, setNotification] = useState<string | null>(null);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [eventToDelete, setEventToDelete] = useState<Event | null>(null);

  const { data, setData, post, put, reset, errors } = useForm({
    titre: "",
    type: "RDV",
    date: "",
    heureD: "",
    heureF: "",
    description: "",
  });

  const eventColors: Record<string, string> = {
    RDV: '#3b82f6',    
    Aide: '#22c55e',   
    Medoc: '#ef4444',  
    Autre: '#8b5cf6',  
  };

  const eventFullNames: Record<string, string> = {
    RDV: 'RDV',
    Aide: 'Aide',
    Medoc: 'Médicament',
    Autre: 'Autre',
  };

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => setNotification(null), 2000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  const openModal = (event?: Event) => {
    if (event) {
      setEventToEdit(event);
      setData({
        titre: event.titre,
        type: event.type,
        date: event.date,
        heureD: event.heureD,
        heureF: event.heureF,
        description: event.description || "",
      });
    } else {
      setEventToEdit(null);
      reset();
    }
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setEventToEdit(null);
    reset();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (eventToEdit) {
      put(`/events/${eventToEdit.id}`, {
        preserveScroll: true,
        onSuccess: () => {
          closeModal();
          setNotification("Événement modifié avec succès");
	  router.reload({ only: ['events'] });
        },
      });
    } else {
      post('/events', {
        preserveScroll: true,
        onSuccess: () => {
          closeModal();
          setNotification("Événement ajouté avec succès");
	  router.reload({ only: ['events'] });
        },
      });
    }
  };

  function handleDelete(id: number) {
    router.delete(`/events/${id}`, {
      preserveScroll: true,
      onSuccess: () => {
        setDeleteModalOpen(false);
        setEventToDelete(null);
        setNotification("Événement supprimé");
        router.reload({ only: ['events'] });
      },
    });
  }

  const mapEventToFullCalendar = (event: Event): EventInput => ({
    id: event.id.toString(),
    title: `${event.titre} (${eventFullNames[event.type]})`,
    start: `${event.date}T${event.heureD}`,
    end: `${event.date}T${event.heureF}`,
    backgroundColor: eventColors[event.type],
    borderColor: eventColors[event.type],
    extendedProps: {
      description: event.description,
    },
  });

  const eventsList: EventInput[] = initialEvents.map(mapEventToFullCalendar);

  return (
    <ProxizenLayout title="Calendrier">
      <div className="fullcalendar-dark-wrapper">
        <style>{`
          /* ========================================
             DArk mode pour le full Calendar
             ======================================== */
          
          /* Mode sombre global */
          .dark .fullcalendar-dark-wrapper .fc {
            background-color: #1f2937; /* bg-gray-800 */
            color: #f9fafb; /* text-white */
            border-radius: 1rem;
            overflow: hidden;
          }

          /* Toolbar (header) */
          .dark .fc .fc-toolbar {
            background-color: #111827; /* bg-gray-900 */
            padding: 1rem;
            border-bottom: 1px solid #374151; /* border-gray-700 */
          }

          .dark .fc .fc-toolbar-title {
            color: #f9fafb !important; /* text-white */
            font-weight: 700;
          }

          /* Boutons */
          .dark .fc .fc-button {
            background-color: #374151 !important; /* bg-gray-700 */
            color: #f9fafb !important; /* text-white */
            border: 1px solid #4b5563 !important; /* border-gray-600 */
            transition: all 0.2s;
          }

          .dark .fc .fc-button:hover {
            background-color: #4b5563 !important; /* bg-gray-600 */
          }

          .dark .fc .fc-button:disabled {
            background-color: #1f2937 !important; /* bg-gray-800 */
            color: #6b7280 !important; /* text-gray-500 */
            opacity: 0.5;
          }

          .dark .fc .fc-button-active {
            background-color: #3b82f6 !important; /* bg-blue-500 */
            border-color: #3b82f6 !important;
          }

          /* Bouton "Ajouter" personnalisé */
          .dark .fc .fc-addEvent-button {
            background-color: #3b82f6 !important; /* bg-blue-500 */
            border-color: #3b82f6 !important;
          }

          .dark .fc .fc-addEvent-button:hover {
            background-color: #2563eb !important; /* bg-blue-600 */
          }

          /* Grille du calendrier */
          .dark .fc .fc-scrollgrid {
            border-color: #374151 !important; /* border-gray-700 */
          }

          .dark .fc .fc-scrollgrid td,
          .dark .fc .fc-scrollgrid th {
            border-color: #374151 !important; /* border-gray-700 */
          }

          /* En-têtes des colonnes (jours de la semaine) */
          .dark .fc .fc-col-header-cell {
            background-color: #111827 !important; /* bg-gray-900 */
            color: #9ca3af !important; /* text-gray-400 */
            font-weight: 600;
            border-color: #374151 !important;
          }

          /* Cellules des jours */
          .dark .fc .fc-daygrid-day,
          .dark .fc .fc-timegrid-col {
            background-color: #1f2937; /* bg-gray-800 */
          }

          .dark .fc .fc-daygrid-day:hover,
          .dark .fc .fc-timegrid-col:hover {
            background-color: #374151; /* bg-gray-700 */
          }

          /* Numéros des jours */
          .dark .fc .fc-daygrid-day-number,
          .dark .fc .fc-col-header-cell-cushion {
            color: #f9fafb !important; /* text-white */
          }

          /* Jour actuel (today) */
          .dark .fc .fc-day-today {
            background-color: #1e3a5f !important; /* bleu foncé */
          }

          .dark .fc .fc-day-today .fc-daygrid-day-number {
            color: #60a5fa !important; /* text-blue-400 */
            font-weight: 700;
          }

          /* Slots horaires (timeline verticale) */
          .dark .fc .fc-timegrid-slot {
            border-color: #374151 !important; /* border-gray-700 */
          }

          .dark .fc .fc-timegrid-slot-label {
            color: #9ca3af; /* text-gray-400 */
          }

          /* Ligne "maintenant" (now indicator) */
          .dark .fc .fc-timegrid-now-indicator-line {
            border-color: #ef4444 !important; /* red-500 */
          }

          .dark .fc .fc-timegrid-now-indicator-arrow {
            border-color: #ef4444 !important; /* red-500 */
          }

          /* Événements */
          .dark .fc-event {
            border: none !important;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
          }

          .dark .fc-event-title {
            color: #ffffff !important;
            font-weight: 500;
          }

          /* Espacement des cellules */
          .dark .fc .fc-daygrid-day-frame,
          .dark .fc .fc-timegrid-col-frame {
            border-color: #374151 !important;
          }

          /* Scrollbar dans le calendrier (optionnel) */
          .dark .fc-scroller::-webkit-scrollbar {
            width: 8px;
          }

          .dark .fc-scroller::-webkit-scrollbar-track {
            background: #1f2937;
          }

          .dark .fc-scroller::-webkit-scrollbar-thumb {
            background: #4b5563;
            border-radius: 4px;
          }

          .dark .fc-scroller::-webkit-scrollbar-thumb:hover {
            background: #6b7280;
          }
        `}</style>

        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin]}
          initialView="timeGridWeek"
          events={eventsList}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'addEvent dayGridMonth,timeGridWeek,timeGridDay',
          }}
          customButtons={{
            addEvent: {
              text: '+ Ajouter',
              click: () => openModal(),
            },
          }}
          expandRows={true}
          slotMinTime="07:00:00"
          slotMaxTime="20:00:00"
          slotDuration="00:30:00"
          firstDay={1}
          displayEventEnd={true}
          eventTimeFormat={{ hour: '2-digit', minute: '2-digit', hour12: false }}
          slotLabelFormat={{ hour: '2-digit', minute: '2-digit', hour12: false }}
          height="auto"
          allDaySlot={false}
          nowIndicator={true}
          dayMaxEvents={true}
          locale={frLocale}
          eventClick={(info) => {
            const evt = initialEvents.find(e => e.id.toString() === info.event.id);
            if (evt) openModal(evt);
          }}
          eventMouseEnter={(info) => {
            info.el.style.transform = 'scale(1.03)';
            info.el.style.boxShadow = '0 6px 18px rgba(0,0,0,0.25)';
            info.el.style.transition = 'all 0.15s ease';
            info.el.style.zIndex = '10';
            info.el.style.cursor = 'pointer';
          }}
          eventMouseLeave={(info) => {
            info.el.style.transform = 'scale(1)';
            info.el.style.boxShadow = 'none';
            info.el.style.zIndex = 'auto';
          }}
        />
      </div>

      {modalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 w-full max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
              {eventToEdit ? "Modifier l'événement" : "Ajouter un événement"}
            </h2>

            <form className="space-y-3" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Titre"
                value={data.titre}
                onChange={(e) => setData("titre", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                required
              />

              <select
                value={data.type}
                onChange={(e) => setData("type", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                required
              >
                <option value="RDV">Rendez-vous médical</option>
                <option value="Aide">Aide à domicile</option>
                <option value="Medoc">Médicament</option>
                <option value="Autre">Autre</option>
              </select>

              <input
                type="date"
                value={data.date}
                onChange={(e) => setData("date", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                required
              />

              <div className="flex gap-2">
                <input
                  type="time"
                  value={data.heureD}
                  onChange={(e) => setData("heureD", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  required
                />
                <input
                  type="time"
                  value={data.heureF}
                  onChange={(e) => setData("heureF", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  required
                />
              </div>

              <textarea
                placeholder="Description"
                value={data.description}
                onChange={(e) => setData("description", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              />

              <div className="flex justify-end gap-3 mt-4">
                {eventToEdit && (
                  <button
                    type="button"
                    onClick={() => {
                      setEventToDelete(eventToEdit);
                      setDeleteModalOpen(true);
                      setModalOpen(false);
                    }}
                    className="flex-1 px-4 py-2 bg-red-500 hover:bg-red-600 text-white dark:bg-red-600 dark:hover:bg-red-700 rounded-lg transition"

                  >
                    Supprimer
                  </button>
                )}
                <button
                  type="button"
                  onClick={closeModal}
                  className="flex-1 px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg transition"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                >
                  {eventToEdit ? "Modifier" : "Ajouter"}
                </button>
              </div>


              {Object.values(errors).map((err, idx) => (
                <p key={idx} className="text-red-500 text-sm">{err}</p>
              ))}
            </form>
          </div>
        </div>
      )}

      {notification && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(0,0,0,0.3)' }}
          onClick={() => setNotification(null)}
        >
          <div
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl max-w-sm w-full p-6 flex justify-between items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-gray-800 dark:text-white">{notification}</p>
            <button
              onClick={() => setNotification(null)}
              className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
            >
              ✕
            </button>
          </div>
        </div>
      )}

	{deleteModalOpen && eventToDelete && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
          onClick={() => setDeleteModalOpen(false)}
        >
          <div
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-sm w-full p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
              Supprimer l’événement ?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              « {eventToDelete.titre} » sera définitivement supprimé.
            </p>

            <div className="flex gap-3">
              <button
                onClick={() => setDeleteModalOpen(false)}
                className="flex-1 px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium transition"
              >
                Annuler
              </button>
              <button
                onClick={() => handleDelete(eventToDelete.id)}
                className="flex-1 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg font-medium transition"
              >
                Supprimer
              </button>
            </div>
          </div>
        </div>
      )}
    </ProxizenLayout>
  );
}
