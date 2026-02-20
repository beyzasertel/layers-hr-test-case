export async function GET() {
  const data = [
    { id: 1, logo: "/images/logo/acibadem-logo.png", name: "acibadem" },
    { id: 2, logo: "/images/logo/akbank-logo.png", name: "akbank" },
    { id: 3, logo: "/images/logo/akcansa-logo.png", name: "akcansa" },
    { id: 4, logo: "/images/logo/akkim-logo.png", name: "akkim" },
    { id: 5, logo: "/images/logo/akkok-logo.png", name: "akkok" },
    { id: 6, logo: "/images/logo/aktif-bank-logo.png", name: "aktif-bank" },
    { id: 7, logo: "/images/logo/allianz-logo.png", name: "allianz" },
    {
      id: 8,
      logo: "/images/logo/anadolu-sigorta-logo.png",
      name: "anadolu-sigorta",
    },
    { id: 9, logo: "/images/logo/anel-logo.png", name: "anel" },
    { id: 10, logo: "/images/logo/arcelik-logo.png", name: "arcelik" },
    { id: 11, logo: "/images/logo/bsh-logo.png", name: "bsh" },
    { id: 12, logo: "/images/logo/bezmialem-logo.png", name: "bezmialem" },
    { id: 13, logo: "/images/logo/ronesans-logo.png", name: "ronesans" },
    { id: 14, logo: "/images/logo/tav-logo.png", name: "tav" },
  ];

  return Response.json({ ok: true, data });
}
