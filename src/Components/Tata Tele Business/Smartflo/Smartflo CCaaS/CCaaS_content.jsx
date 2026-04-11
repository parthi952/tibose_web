import React from "react";

export default function CCaaS_content() {
  return (
    <div className="w-full bg-white mt-10 text-gray-800">
      {/* SECTION 1 */}
      <div className="grid md:grid-cols-2 gap-20 px-25 p-10 mb- items-center">
        <img
          src="CCaaS-1.png"
          alt="call center"
          className="rounded-xl h-60"
        />

        <div>
          <h3 className="font-bold text-sm mb-3">
            STREAMLINE CUSTOMER INTERACTIONS WITH INTELLIGENT TOOLS
          </h3>
          <p className="text-sm mb-2">
            <strong>Skill-Based Routing:</strong> Direct customers to the most qualified agent for their queries.
          </p>
          <p className="text-sm mb-2">
            <strong>Omnichannel Support:</strong> Manage customer interactions across voice, email, chat, and social channels.
          </p>
          <p className="text-sm">
            <strong>Interactive Voice Response (IVR):</strong> Guide customers effectively and reduce wait times.
          </p>
        </div>
      </div>

      {/* SECTION 2 */}
      <div className="grid md:grid-cols-2 gap-10 px-25 pb-20 items-center">
        <div>
          <h3 className="font-bold text-sm mb-3">
            BOOST OPERATIONAL EFFICIENCY WITH REAL-TIME INSIGHTS
          </h3>
          <p className="text-sm mb-2">
            <strong>Performance Metrics:</strong> Track agent productivity and improve service quality with detailed analytics.
          </p>
          <p className="text-sm mb-2">
            <strong>Resource Optimisation:</strong> Manage workloads to handle peak demand without impacting service quality.
          </p>
          <p className="text-sm">
            <strong>Real-Time Monitoring:</strong> Monitor live interactions and intervene when necessary to improve outcomes.
          </p>
        </div>

        <img
          src="CCaaS-2.png"
          alt="analytics"
          className="rounded-xl w-full h-70"
        />
      </div>

      {/* SECTION 3 */}
      <div className="grid md:grid-cols-2 gap-10 px-25 pb-20 items-center">
        <img
          src="CCaaS-3.png"
          alt="cloud"
          className="rounded-xl w-full h-70"
        />

        <div>
          <h3 className="font-bold text-sm mb-3">
            ENSURE BUSINESS CONTINUITY WITH CLOUD SCALABILITY
          </h3>
          <p className="text-sm mb-2">
            <strong>Flexible Scalability:</strong> Adjust your contact center capacity to match customer demands in real-time.
          </p>
          <p className="text-sm mb-2">
            <strong>Disaster Recovery:</strong> Ensure uninterrupted service with cloud-based redundancy and backups.
          </p>
          <p className="text-sm">
            <strong>Secure Cloud Access:</strong> Protect customer data with advanced encryption and compliance measures.
          </p>
        </div>
      </div>

    </div>
  );
}