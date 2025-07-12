import { getProfileByUsername, getUserLikedPosts, getUserPosts, isFollowing } from '@/actions/profile.action';
import { error } from 'console';
import { notFound } from 'next/navigation';
import React from 'react'
import { setTimeout } from 'timers';
import ProfilePageClient from './ProfilePageClient';

export async function generateMetadata({params}:{params: {username: string}}){
    const user = await getProfileByUsername(params.username);
    if(!user) return;

    return {
        title: `${user.name ?? user.username}`,
        description: user.bio || `check out ${user.username}'s profile.`
    }
}

async function ProfilePageServer({params}: {params: {username: string}}) {

    const user = await getProfileByUsername(params.username);
    if(!user) notFound();

    const [posts, likedPosts, isCurrentUserFollowing] = await Promise.all([
        getUserPosts(user.id),
        getUserLikedPosts(user.id),
        isFollowing(user.id),
    ]);
  return (
    <div>
      <ProfilePageClient
      
      user={user}
      posts={posts}
      likedPosts={likedPosts}
      isFollowing={isCurrentUserFollowing}  
      />
    </div>
  )
}

export default ProfilePageServer
