import React, { useState } from 'react';
import { 
  IoCalendarOutline, 
  IoMedkitOutline, 
  IoDocumentTextOutline,
  IoCheckmarkCircle,
  IoTimeOutline,
  IoPersonOutline
} from 'react-icons/io5';

const AdvancedCareDashboard = () => {
  const [selectedTreatment, setSelectedTreatment] = useState(null);

  // Static data for Advanced Care
  const treatments = [
    {
      id: 1,
      name: "Physical Therapy",
      patient: "John Doe",
      status: "In Progress",
      sessions: "8/12 completed",
      nextSession: "Nov 26, 2025",
      therapist: "Dr. Sarah Johnson"
    },
    {
      id: 2,
      name: "Wound Care Management",
      patient: "Jane Smith",
      status: "Active",
      sessions: "3/8 completed",
      nextSession: "Nov 25, 2025",
      therapist: "Nurse Emily Davis"
    },
    {
      id: 3,
      name: "Respiratory Therapy",
      patient: "Robert Wilson",
      status: "Active",
      sessions: "5/10 completed",
      nextSession: "Nov 27, 2025",
      therapist: "Dr. Michael Chen"
    }
  ];

  const upcomingAppointments = [
    {
      id: 1,
      patient: "John Doe",
      type: "Physical Therapy Follow-up",
      date: "Nov 26, 2025",
      time: "10:00 AM",
      location: "Therapy Room A"
    },
    {
      id: 2,
      patient: "Jane Smith",
      type: "Wound Assessment",
      date: "Nov 25, 2025",
      time: "2:30 PM",
      location: "Clinic Room 3"
    },
    {
      id: 3,
      patient: "Robert Wilson",
      type: "Respiratory Evaluation",
      date: "Nov 27, 2025",
      time: "11:00 AM",
      location: "Pulmonary Lab"
    }
  ];

  const carePlans = [
    {
      id: 1,
      patient: "John Doe",
      plan: "Post-Surgery Rehabilitation",
      progress: 65,
      milestones: [
        { task: "Initial Assessment", completed: true },
        { task: "Pain Management", completed: true },
        { task: "Mobility Exercises", completed: false },
        { task: "Strength Training", completed: false }
      ]
    },
    {
      id: 2,
      patient: "Jane Smith",
      plan: "Chronic Wound Management",
      progress: 40,
      milestones: [
        { task: "Wound Cleaning", completed: true },
        { task: "Infection Control", completed: true },
        { task: "Tissue Regeneration", completed: false },
        { task: "Closure Assessment", completed: false }
      ]
    }
  ];

  const stats = [
    { label: "Active Treatments", value: "12", icon: IoMedkitOutline, color: "bg-blue-500" },
    { label: "This Week's Appointments", value: "8", icon: IoCalendarOutline, color: "bg-green-500" },
    { label: "Care Plans", value: "15", icon: IoDocumentTextOutline, color: "bg-purple-500" },
    { label: "Completed Sessions", value: "47", icon: IoCheckmarkCircle, color: "bg-teal-500" }
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-12">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {stats.map((stat, index) => (
          <div 
            key={index}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">
                  {stat.label}
                </p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">
                  {stat.value}
                </p>
              </div>
              <div className={`${stat.color} p-3 rounded-lg`}>
                <stat.icon className="text-2xl text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Active Treatments */}
        <div className="lg:col-span-2">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <IoMedkitOutline className="text-blue-500" />
                Active Treatments
              </h2>
            </div>
            <div className="p-6 space-y-4">
              {treatments.map((treatment) => (
                <div 
                  key={treatment.id}
                  className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => setSelectedTreatment(treatment)}
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white text-lg">
                        {treatment.name}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-1 mt-1">
                        <IoPersonOutline /> {treatment.patient}
                      </p>
                    </div>
                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-full text-xs font-semibold">
                      {treatment.status}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <p className="text-gray-500 dark:text-gray-400">Progress</p>
                      <p className="font-semibold text-gray-900 dark:text-white">{treatment.sessions}</p>
                    </div>
                    <div>
                      <p className="text-gray-500 dark:text-gray-400">Next Session</p>
                      <p className="font-semibold text-gray-900 dark:text-white">{treatment.nextSession}</p>
                    </div>
                  </div>
                  <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Therapist: <span className="font-semibold text-gray-900 dark:text-white">{treatment.therapist}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Upcoming Appointments */}
        <div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 mb-6">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <IoCalendarOutline className="text-green-500" />
                Upcoming
              </h2>
            </div>
            <div className="p-6 space-y-4">
              {upcomingAppointments.map((appointment) => (
                <div 
                  key={appointment.id}
                  className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 dark:bg-green-900 p-2 rounded-lg">
                      <IoTimeOutline className="text-green-600 dark:text-green-400 text-xl" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
                        {appointment.patient}
                      </h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                        {appointment.type}
                      </p>
                      <div className="mt-2 space-y-1">
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          📅 {appointment.date} at {appointment.time}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          📍 {appointment.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Care Plans */}
      <div className="mt-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <IoDocumentTextOutline className="text-purple-500" />
              Care Plans Overview
            </h2>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {carePlans.map((plan) => (
                <div 
                  key={plan.id}
                  className="bg-gray-50 dark:bg-gray-900 rounded-lg p-5 border border-gray-200 dark:border-gray-700"
                >
                  <div className="mb-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">
                          {plan.patient}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {plan.plan}
                        </p>
                      </div>
                      <span className="text-lg font-bold text-teal-600 dark:text-teal-400">
                        {plan.progress}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-teal-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${plan.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {plan.milestones.map((milestone, idx) => (
                      <div 
                        key={idx}
                        className="flex items-center gap-2 text-sm"
                      >
                        {milestone.completed ? (
                          <IoCheckmarkCircle className="text-green-500 text-lg flex-shrink-0" />
                        ) : (
                          <div className="w-5 h-5 rounded-full border-2 border-gray-300 dark:border-gray-600 flex-shrink-0"></div>
                        )}
                        <span className={`${
                          milestone.completed 
                            ? 'text-gray-500 dark:text-gray-400 line-through' 
                            : 'text-gray-900 dark:text-white'
                        }`}>
                          {milestone.task}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedCareDashboard;