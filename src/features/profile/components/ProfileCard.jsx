import ProfileEducationForm from './ProfileEducationForm';
import ProfileExperienceForm from './ProfileExperienceForm';
import ProfileForm from './ProfileForm';
import SkeletonProfileCard from './SkeletonProfileCard';
import { Suspense } from 'react'
import useProfile from '../hooks/useProfile';

const ProfileCard = () => {
  const { profile, error } = useProfile();

  return (
    <>
      {error && <p className="text-red-500">{error}</p>}
      <Suspense fallback={<Loading />}>
        {profile && (
          <div className="px-4 py-6">
            {/* <ProfileForm /> */}
            <ProfileEducationForm />
            <ProfileExperienceForm />
          </div>
        )}
      </Suspense >
    </>
  )
}

const Loading = () => {
  return (
    <SkeletonProfileCard />
  )
}

export default ProfileCard