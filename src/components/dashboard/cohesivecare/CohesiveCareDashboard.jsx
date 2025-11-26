import React, { useState } from 'react';
import { 
  IoDocumentTextOutline,
  IoCardOutline,
  IoShieldCheckmarkOutline,
  IoCalendarOutline,
  IoCashOutline,
  IoAlertCircleOutline,
  IoCheckmarkCircle,
  IoTimeOutline
} from 'react-icons/io5';

const CohesiveDashboard = () => {
  const [selectedClaim, setSelectedClaim] = useState(null);

  // Static Medicare data
  const claims = [
    {
      id: "CLM-2025-001",
      patient: "Mary Johnson",
      service: "Annual Wellness Visit",
      dateOfService: "Nov 15, 2025",
      status: "Approved",
      claimedAmount: "$285.00",
      approvedAmount: "$250.00",
      processedDate: "Nov 20, 2025"
    },
    {
      id: "CLM-2025-002",
      patient: "Robert Williams",
      service: "Diabetic Supply - Test Strips",
      dateOfService: "Nov 10, 2025",
      status: "Processing",
      claimedAmount: "$150.00",
      approvedAmount: "Pending",
      processedDate: "In Progress"
    },
    {
      id: "CLM-2025-003",
      patient: "Patricia Davis",
      service: "Physical Therapy (3 sessions)",
      dateOfService: "Nov 8, 2025",
      status: "Approved",
      claimedAmount: "$360.00",
      approvedAmount: "$320.00",
      processedDate: "Nov 18, 2025"
    },
    {
      id: "CLM-2025-004",
      patient: "James Miller",
      service: "Laboratory Tests",
      dateOfService: "Nov 5, 2025",
      status: "Denied",
      claimedAmount: "$120.00",
      approvedAmount: "$0.00",
      processedDate: "Nov 12, 2025"
    }
  ];

  const coverageInfo = [
    {
      category: "Part A - Hospital Insurance",
      deductible: "$1,632",
      coinsurance: "$408/day (days 61-90)",
      status: "Active"
    },
    {
      category: "Part B - Medical Insurance",
      deductible: "$240 (Met)",
      coinsurance: "20% of approved amount",
      status: "Active"
    },
    {
      category: "Part D - Prescription Drug",
      deductible: "$545",
      coinsurance: "25% after deductible",
      status: "Active"
    }
  ];

  const beneficiaries = [
    {
      id: 1,
      name: "Mary Johnson",
      medicareNumber: "1AA2-BB3-CC44",
      planType: "Medicare Advantage",
      effectiveDate: "Jan 1, 2024",
      deductibleMet: 100,
      outOfPocketMax: "$7,550",
      outOfPocketUsed: "$2,340"
    },
    {
      id: 2,
      name: "Robert Williams",
      medicareNumber: "1XX2-YY3-ZZ44",
      planType: "Original Medicare + Part D",
      effectiveDate: "Mar 1, 2023",
      deductibleMet: 65,
      outOfPocketMax: "N/A",
      outOfPocketUsed: "$1,850"
    },
    {
      id: 3,
      name: "Patricia Davis",
      medicareNumber: "1DD2-EE3-FF44",
      planType: "Medicare Advantage",
      effectiveDate: "Jan 1, 2025",
      deductibleMet: 80,
      outOfPocketMax: "$6,700",
      outOfPocketUsed: "$1,200"
    }
  ];

  const stats = [
    { label: "Active Claims", value: "4", icon: IoDocumentTextOutline, color: "bg-blue-500" },
    { label: "Total Approved", value: "$570", icon: IoCheckmarkCircle, color: "bg-green-500" },
    { label: "Covered Beneficiaries", value: "12", icon: IoCardOutline, color: "bg-purple-500" },
    { label: "Pending Reviews", value: "2", icon: IoTimeOutline, color: "bg-orange-500" }
  ];

  const getStatusColor = (status) => {
    switch(status.toLowerCase()) {
      case 'approved':
        return 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300';
      case 'processing':
        return 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300';
      case 'denied':
        return 'bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300';
      default:
        return 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300';
    }
  };

  const getStatusIcon = (status) => {
    switch(status.toLowerCase()) {
      case 'approved':
        return <IoCheckmarkCircle className="text-green-500" />;
      case 'processing':
        return <IoTimeOutline className="text-blue-500" />;
      case 'denied':
        return <IoAlertCircleOutline className="text-red-500" />;
      default:
        return <IoDocumentTextOutline />;
    }
  };

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
        {/* Recent Claims */}
        <div className="lg:col-span-2">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <IoDocumentTextOutline className="text-blue-500" />
                Recent Claims
              </h2>
            </div>
            <div className="p-6 space-y-4">
              {claims.map((claim) => (
                <div 
                  key={claim.id}
                  className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => setSelectedClaim(claim)}
                >
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-start gap-3">
                      <div className="mt-1">
                        {getStatusIcon(claim.status)}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">
                          {claim.service}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                          Patient: {claim.patient}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                          Claim ID: {claim.id}
                        </p>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(claim.status)}`}>
                      {claim.status}
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-3 text-sm mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
                    <div>
                      <p className="text-gray-500 dark:text-gray-400 text-xs">Date of Service</p>
                      <p className="font-semibold text-gray-900 dark:text-white">{claim.dateOfService}</p>
                    </div>
                    <div>
                      <p className="text-gray-500 dark:text-gray-400 text-xs">Claimed</p>
                      <p className="font-semibold text-gray-900 dark:text-white">{claim.claimedAmount}</p>
                    </div>
                    <div>
                      <p className="text-gray-500 dark:text-gray-400 text-xs">Approved</p>
                      <p className="font-semibold text-gray-900 dark:text-white">{claim.approvedAmount}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Coverage Information */}
        <div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <IoShieldCheckmarkOutline className="text-purple-500" />
                Coverage
              </h2>
            </div>
            <div className="p-6 space-y-4">
              {coverageInfo.map((coverage, idx) => (
                <div 
                  key={idx}
                  className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
                      {coverage.category}
                    </h4>
                    <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded text-xs font-semibold">
                      {coverage.status}
                    </span>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Deductible:</span>
                      <span className="font-semibold text-gray-900 dark:text-white">{coverage.deductible}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Coinsurance:</span>
                      <span className="font-semibold text-gray-900 dark:text-white text-xs">{coverage.coinsurance}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Beneficiaries */}
      <div className="mt-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <IoCardOutline className="text-teal-500" />
              Medicare Beneficiaries
            </h2>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {beneficiaries.map((beneficiary) => (
                <div 
                  key={beneficiary.id}
                  className="bg-gray-50 dark:bg-gray-900 rounded-lg p-5 border border-gray-200 dark:border-gray-700"
                >
                  <div className="mb-4">
                    <h3 className="font-semibold text-gray-900 dark:text-white text-lg">
                      {beneficiary.name}
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 font-mono">
                      {beneficiary.medicareNumber}
                    </p>
                    <div className="mt-2">
                      <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-xs font-semibold">
                        {beneficiary.planType}
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="text-gray-500 dark:text-gray-400 text-xs mb-1">Effective Date</p>
                      <p className="font-semibold text-gray-900 dark:text-white">{beneficiary.effectiveDate}</p>
                    </div>
                    
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <p className="text-gray-500 dark:text-gray-400 text-xs">Deductible Met</p>
                        <span className="text-teal-600 dark:text-teal-400 font-bold">{beneficiary.deductibleMet}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-teal-500 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${beneficiary.deductibleMet}%` }}
                        ></div>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-600 dark:text-gray-400 text-xs">Out-of-Pocket Max:</span>
                        <span className="font-semibold text-gray-900 dark:text-white text-xs">{beneficiary.outOfPocketMax}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400 text-xs">Used:</span>
                        <span className="font-semibold text-gray-900 dark:text-white text-xs">{beneficiary.outOfPocketUsed}</span>
                      </div>
                    </div>
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

export default CohesiveDashboard;