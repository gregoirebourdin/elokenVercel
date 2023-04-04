import {EventsList} from '@/templates/EventsPage';
import Mesh from "@/images/mesh.jpg";
import Meta from "@/base/meta/Meta";
import {path} from "@/routes/paths";
import prisma from "@/utils/prisma";
import {metas} from "@/routes/metas";


export default function Events({events} : any) {
    const pages = [
        {
            name: "Évènements",
            href: path.events.root,
            current: true,
        }
    ]

    const meta = metas.events;


    return (
        <>
            <Meta
                title={meta.title}
                description={meta.description}
                keywords={meta.keywords}
            />

            <EventsList events={events} pages={pages} meta={meta}/>
        </>
    )
}

export async function getServerSideProps({ req, res }) {
    // Get all events
    const events = await prisma.event.findMany({
        where: {
            project: {
                id: process.env.ELOKEN_PROJECT_ID
            },
        }
    });
  return {
    props: {
        events: JSON.parse(JSON.stringify(events)),
    },
  }
}