import React from 'react'
import useProfile from '../hooks/useProfile';

const ProfileCard = () => {
  const { profile, loading, error } = useProfile();

  return (
    <div className="px-4 py-6">
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {profile && (
        <div className="fade-up bg-white p-4 rounded-lg">
          <div className="px-4 sm:px-0">
            <h1 className="text-lg/7 font-semibold text-gray-900">Profile</h1>
          </div>
          <div className="mt-6 border-t border-gray-100">
            <dl className="divide-gray-700 divide-y-2">

            </dl>
          </div>

        </div>
      )}
    </div>
  )
}

export default ProfileCard