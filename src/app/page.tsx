import { getPosts } from "@/actions/post.action";
import { getDbUserId } from "@/actions/user.action";
import CreatePost from "@/components/CreatePost";
import ModeToggle from "@/components/ModeToggle";
import Postcard from "@/components/Postcard";
import { Button } from "@/components/ui/button";
import WhoToFollow from "@/components/WhoToFollow";
import { prisma } from "@/lib/prisma";
import { SignedOut, SignInButton, SignUpButton, SignedIn, UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";

export default async function Home() {
  const user = await currentUser();
  const posts = await getPosts();
  const dbUserId = await getDbUserId();
  console.log("Posts: ", posts);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">
      <div className="lg:col-span-6">
        {user ? <CreatePost /> : null}
        <div className="space-y-6">
          {posts.map((post) => (
            <Postcard key={post.id} post={post} dbUserId = {dbUserId}/>
          ))}
        </div>
        

      </div>
      <div className="hidden lg:block lg:col-span-4 sticky top-20">
        <WhoToFollow/>
      </div>
    </div>
  );
}
