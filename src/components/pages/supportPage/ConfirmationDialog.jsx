import React from 'react';

export const ConfirmationDialog = ({ data, onEdit, onConfirm }) => (
    <div className="mt-8 p-6 border rounded-lg bg-white shadow-lg">
      <h3 className="text-xl font-semibold mb-4">Please Confirm Your Details</h3>
      <div className="space-y-3">
        {Object.entries(data || {}).map(([key, value]) => (
          <p key={key}><strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}</p>
        ))}
      </div>
      <div className="mt-6 flex gap-4">
        <button
          onClick={onEdit}
          className="px-4 py-2 border rounded-md hover:bg-gray-100"
        >
          Edit Details
        </button>
        <button
          onClick={onConfirm}
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
        >
          Confirm & Submit
        </button>
      </div>
    </div>
  );