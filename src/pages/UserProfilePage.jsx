import { Link } from "react-router-dom";

function UserProfilePage() {
  const userProfile = {
    image: "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/lab-cohort-tools-routing/profile-1.png",
    name: "Jane Doe",
    email: "janed@example.com",
    role: "Lead Teacher",
  };

  return (
    <div className="StudentDetailsPage bg-gray-100 py-6 px-4 border-2 border-violet-500 m-2">
      <h1>User Profile Page</h1>
      <div className="bg-white p-8 rounded-lg shadow-md mb-6">
        <img src={userProfile.image} alt="profile-photo" className="rounded-full w-32 h-32 object-cover border-2 border-gray-300" />
        <h1 className="text-2xl mt-4 font-bold">{userProfile.name}</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 mb-4 border-b pb-4">
          <p><strong>Email:</strong> {userProfile.email}</p>
          <p><strong>Role:</strong> {userProfile.role}</p>
        </div>

        {/* Back button */}
        <Link to="/" className="text-white px-4 py-2 rounded bg-green-500 hover:bg-green-600 transition duration-300 ease-in-out">
          Back
        </Link>
      </div>
    </div>
  );
}

export default UserProfilePage;
