import { getCompanion } from "@/lib/actions/companion.actions";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

interface CompanionSessionPageProps {
    params: Promise<{ id: string}>
}


const CompanionSession = async ({params}: CompanionSessionPageProps) => {
    const { id } = await params;
    const companion = await getCompanion(id);
    const user = await currentUser();

    if(!user) return redirect(('/sign-in'));
    if(!companion) return redirect('/companions');

    return (
        <div>CompanionSession</div>
    )
}

export default CompanionSession