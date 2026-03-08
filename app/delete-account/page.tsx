export default function DeleteAccountPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-16 text-gray-800">
      <div className="max-w-3xl mx-auto">

        <h1 className="text-3xl font-bold text-red-600 mb-6">
          Delete Your PawSOS Account
        </h1>

        <p className="mb-6 text-gray-600">
          PawSOS (AnimalSathi) allows users to permanently delete their account 
          and associated data directly from the mobile application.
        </p>

        <h2 className="text-xl font-semibold mb-3">How to Delete Your Account</h2>

        <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-8">
          <li>Open the PawSOS mobile app</li>
          <li>Go to <strong>Profile</strong></li>
          <li>Scroll down and tap <strong>Delete Account</strong></li>
          <li>Confirm your password or re-authenticate with Google</li>
          <li>Your account and associated data will be permanently removed</li>
        </ol>

        <h2 className="text-xl font-semibold mb-3">What Data Is Deleted?</h2>

        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8">
          <li>Your account profile information</li>
          <li>Email address and authentication data</li>
          <li>Volunteer information (if applicable)</li>
          <li>Uploaded documents (ID card, certificates)</li>
        </ul>

        <h2 className="text-xl font-semibold mb-3">Data Retention</h2>

        <p className="text-gray-700 mb-6">
          Some anonymized or legally required records may be retained 
          for a limited period for compliance and safety purposes.
        </p>

        <p className="text-sm text-gray-500">
          For support, contact: animalsathi.app@gmail.com
        </p>

      </div>
    </main>
  );
}