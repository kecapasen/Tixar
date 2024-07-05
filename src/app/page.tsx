import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@radix-ui/react-context-menu";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-dvh font-poppins text-stone-800">
      <div className="flex justify-between items-center px-8 py-4 w-full">
        <p className="text-2xl font-bold">TIXAR</p>
        <div className="flex gap-4 items-center">
          <Button variant="link">Kenapa gabung?</Button>
          <Button variant="link">FAQ</Button>
          <Button>Gabung sekarang!</Button>
        </div>
      </div>
      <div className="grid grid-cols-2 px-8 py-12">
        <div className="flex flex-col justify-center gap-4">
          <p className="text-4xl font-bold">
            Yuk, Gabung dan Eksplorasi Dunia Digital Bareng Kita!
          </p>
          <Separator className="w-48 border-2 rounded-full border-amber-500" />
          <p className="text-sm font-medium text-justify">
            Halo, teman-teman! Punya mimpi jadi programmer handal, desainer
            grafis keren, atau ahli digital lainnya? Di Tixar, kita ngumpul
            bareng buat belajar, berbagi ilmu, dan berkarya. Di sini, kamu bakal
            ketemu teman-teman yang sama-sama punya semangat tinggi buat ngejar
            passion di dunia teknologi dan kreativitas. So, siap-siap buat
            petualangan seru yang bakal bikin skill kamu naik level!
          </p>
          <Button className="w-48">Gabung sekarang!</Button>
        </div>
        <div className="flex items-center justify-end">
          <Image
            src={"/hero.svg"}
            alt="Dekorasi"
            height={500}
            width={500}
            quality={100}
          />
        </div>
      </div>
      <div className="flex flex-col justify-center gap-8 px-8 py-12 bg-slate-100 shadow-inner">
        <p className="text-2xl font-bold text-center underline">
          Kenapa Harus Gabung?
        </p>
        <div className="grid grid-cols-3 gap-8">
          <div className="flex gap-2">
            <p className="py-4 text-base font-bold">1.</p>
            <Card className="ml-4 w-full">
              <CardHeader className="flex flex-col gap-1">
                <CardTitle className="text-base font-bold">
                  Belajar Coding dari Dasar Sampai Ahli
                </CardTitle>
                <Separator className="w-full border rounded-full border-amber-500" />
                <CardDescription className="text-sm font-medium text-justify text-stone-800">
                  Mulai dari HTML, CSS, JavaScript, sampai Python dan lain-lain,
                  kita punya mentor yang siap bantu kamu jadi pro!
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
          <div className="flex gap-2">
            <p className="py-4 text-base font-bold">2.</p>
            <Card className="ml-4 w-full">
              <CardHeader className="flex flex-col gap-1">
                <CardTitle className="text-base font-bold">
                  Desain Grafis yang Keren Abis
                </CardTitle>
                <Separator className="w-full border rounded-full border-amber-500" />
                <CardDescription className="text-sm font-medium text-justify text-stone-800">
                  Pelajari teknik-teknik desain terkini, software keren kayak
                  Adobe Photoshop, Illustrator, dan banyak lagi!
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
          <div className="flex gap-2">
            <p className="py-4 text-base font-bold">3.</p>
            <Card className="ml-4 w-full">
              <CardHeader className="flex flex-col gap-1">
                <CardTitle className="text-base font-bold">
                  Komunitas yang Asik dan Supportif
                </CardTitle>
                <Separator className="w-full border rounded-full border-amber-500" />
                <CardDescription className="text-sm font-medium text-justify text-stone-800">
                  Gabung di grup belajar, dan berkolaborasi dalam proyek
                  menarik. Di sini, kita saling dukung dan bertumbuh bareng.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center gap-8 px-8 py-12">
        <p className="text-2xl font-bold text-center underline">Proyek Kami</p>
        <div className="grid grid-cols-4 gap-8">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-center p-0 relative h-48 w-full">
                <Image
                  src="/project-1.svg"
                  alt="Project-1"
                  fill
                  quality={100}
                  className="object-cover"
                />
              </div>
              <Separator className="w-full border rounded-full border-amber-500" />
            </CardHeader>
            <CardContent>
              <p className="text-base font-bold text-center">
                Platform E-Learning Sekolah
              </p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Lihat Detail</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <div className="flex items-center justify-center p-0 relative h-48 w-full">
                <Image
                  src="/project-2.svg"
                  alt="Project-2"
                  fill
                  quality={100}
                  className="object-cover"
                />
              </div>
              <Separator className="w-full border rounded-full border-amber-500" />
            </CardHeader>
            <CardContent>
              <p className="text-base font-bold text-center">
                Website Pemilihan Ketua OSIS
              </p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Lihat Detail</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <div className="flex items-center justify-center p-0 relative h-48 w-full">
                <Image
                  src="/project-3.svg"
                  alt="Project-3"
                  fill
                  quality={100}
                  className="object-cover"
                />
              </div>
              <Separator className="w-full border rounded-full border-amber-500" />
            </CardHeader>
            <CardContent>
              <p className="text-base font-bold text-center">
                Texality (Augmented Reality)
              </p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Lihat Detail</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <div className="flex items-center justify-center p-0 relative h-48 w-full">
                <Image
                  src="/project-4.svg"
                  alt="Project-4"
                  fill
                  quality={100}
                  className="object-cover"
                />
              </div>
              <Separator className="w-full border rounded-full border-amber-500" />
            </CardHeader>
            <CardContent>
              <p className="text-base font-bold text-center">Game Gemar</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Lihat Detail</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
      <div className="flex flex-col justify-center gap-8 px-8 py-12">
        <p className="text-2xl font-bold text-center underline">FAQ</p>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-base font-bold">
              Q: Apa sih Tixar itu?
            </AccordionTrigger>
            <AccordionContent className="text-sm font-medium">
              A: Tixar adalah komunitas di sekolah kita yang fokus pada
              pengembangan keterampilan digital seperti coding, desain grafis,
              dan keterampilan teknologi lainnya.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-base font-bold">
              Q: Siapa saja yang bisa bergabung?
            </AccordionTrigger>
            <AccordionContent className="text-sm font-medium">
              A: Semua siswa yang tertarik dan punya semangat untuk belajar
              coding atau desain grafis bisa bergabung!
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-base font-bold">
              Q: Apakah harus punya pengalaman sebelumnya?
            </AccordionTrigger>
            <AccordionContent className="text-sm font-medium">
              A: Nggak perlu, kok! Kita mulai belajar dari dasar, jadi pemula
              pun sangat welcome.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-base font-bold">
              Q: Kapan dan di mana kegiatan diadakan?
            </AccordionTrigger>
            <AccordionContent className="text-sm font-medium">
              A: Kegiatan biasanya diadakan setiap Sabtu dan Minggu (8.30 -
              11.00) di ruangan 3.4A (Texar). Informasi lebih lanjut akan
              diberikan setelah kamu bergabung.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="text-base font-bold">
              Q: Bagaimana cara mendaftar?
            </AccordionTrigger>
            <AccordionContent className="text-sm font-medium">
              A: Kamu bisa langsung daftar{" "}
              <Button asChild variant="link" className="p-0 font-bold">
                <Link href="">disini.</Link>
              </Button>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <p className="text-base font-bold text-center py-2">
        &copy; {new Date().getFullYear()} Rizky Maulana - Tixar.
      </p>
    </div>
  );
}
