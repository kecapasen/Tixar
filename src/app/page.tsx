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
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@radix-ui/react-context-menu";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";

export default function Home() {
  return (
    <div className="min-h-dvh font-poppins text-stone-800">
      <div className="flex justify-between items-center px-8 py-4 w-full sticky top-0 bg-white z-10">
        <Sheet>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" className="p-0">
              <FiMenu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <div className="flex flex-col justify-between h-full">
              <div className="flex flex-col gap-2">
                <Button variant="link" className="justify-start" asChild>
                  <Link href="#kenapa-gabung">Kenapa gabung?</Link>
                </Button>
                <Button variant="link" className="justify-start" asChild>
                  <Link href="#faq">FAQ</Link>
                </Button>
              </div>
              <Button className="bg-stone-800">Gabung sekarang!</Button>
            </div>
          </SheetContent>
        </Sheet>
        <p className="text-2xl font-bold">TIXAR</p>
        <div className="hidden lg:flex gap-4 items-center">
          <Button variant="link">Kenapa gabung?</Button>
          <Button variant="link">FAQ</Button>
          <Button asChild className="bg-stone-800">
            <Link href="https://bit.ly/join-tixar">Gabung sekarang!</Link>
          </Button>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 gap-8 px-8 py-12">
        <div className="flex flex-col justify-center gap-4">
          <p className="text-4xl font-bold">
            Yuk, Gabung dan Eksplorasi Dunia Digital Bareng Kita!
          </p>
          <Separator className="w-full lg:w-48 border-2 rounded-full border-amber-500" />
          <p className="text-sm font-medium text-justify">
            Halo, teman-teman! Punya mimpi jadi programmer handal, desainer
            grafis keren, atau ahli digital lainnya? Di Tixar, kita ngumpul
            bareng buat belajar, berbagi ilmu, dan berkarya. Di sini, kamu bakal
            ketemu teman-teman yang sama-sama punya semangat tinggi buat ngejar
            passion di dunia teknologi dan kreativitas. So, siap-siap buat
            petualangan seru yang bakal bikin skill kamu naik level!
          </p>
          <Button asChild className="w-full lg:w-48 bg-stone-800">
            <Link href="https://bit.ly/join-tixar">Gabung sekarang!</Link>
          </Button>
        </div>
        <div className="hidden lg:flex items-center justify-end">
          <img src={"/hero.svg"} alt="Dekorasi" height={500} width={500} />
        </div>
      </div>
      <div className="flex justify-center items-center gap-8 px-8 py-12 bg-slate-100 shadow-inner">
        <Separator className="flex-grow hidden lg:inline w-full max-h-0 border-2 rounded-full border-amber-500" />
        <video
          width="600"
          controls
          autoPlay
          muted
          loop
          className="aspect-video object-cover rounded-sm"
        >
          <source src="/tixar.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <Separator className="flex-grow hidden lg:inline w-full max-h-0 border-2 rounded-full border-amber-500" />
      </div>
      <div className="flex flex-col justify-center gap-8 px-8 py-12">
        <p className="text-2xl font-bold text-center underline">Proyek Kami</p>
        <Carousel className="w-full select-none cursor-grab">
          <CarouselContent>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
              <div className="p-0">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-center p-0 relative h-48 w-full">
                      <img
                        src="/perpustakaan.svg"
                        alt="Perpustakaan"
                        className="object-contain absolute h-full w-full"
                      />
                    </div>
                    <Separator className="w-full border rounded-full border-amber-500" />
                  </CardHeader>
                  <CardContent>
                    <p className="text-base font-bold text-center">
                      Perpustakaan
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="w-full bg-stone-800">
                          Lihat Detail
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="p-0 overflow-hidden">
                        <video
                          width="600"
                          controls
                          autoPlay
                          muted
                          loop
                          className="aspect-video object-cover rounded-sm"
                        >
                          <source src="/perpustakaan.mp4" type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </DialogContent>
                    </Dialog>
                  </CardFooter>
                </Card>
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
              <div className="p-0">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-center p-0 relative h-48 w-full">
                      <img
                        src="/texality.jpg"
                        alt="Texality"
                        className="object-cover rounded-sm absolute h-full w-full"
                      />
                    </div>
                    <Separator className="w-full border rounded-full border-amber-500" />
                  </CardHeader>
                  <CardContent>
                    <p className="text-base font-bold text-center">Texality</p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-stone-800" asChild>
                      <Link href="https://texality.texaslearning.org">
                        Lihat Detail
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
              <div className="p-0">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-center p-0 relative h-48 w-full">
                      <img
                        src="/texaslearning.jpg"
                        alt="Texaslearning"
                        className="object-cover rounded-sm absolute h-full w-full"
                      />
                    </div>
                    <Separator className="w-full border rounded-full border-amber-500" />
                  </CardHeader>
                  <CardContent>
                    <p className="text-base font-bold text-center">
                      Texaslearning
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-stone-800" asChild>
                      <Link href="https://texaslearning.org">Lihat Detail</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
              <div className="p-0">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-center p-0 relative h-48 w-full">
                      <img
                        src="/texasvoice.svg"
                        alt="Texasvoice"
                        className="object-contain absolute h-full w-full"
                      />
                    </div>
                    <Separator className="w-full border rounded-full border-amber-500" />
                  </CardHeader>
                  <CardContent>
                    <p className="text-base font-bold text-center">
                      Texasvoice
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-stone-800" asChild>
                      <Link href="https://texasvoice.texaslearning.org">
                        Lihat Detail
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
              <div className="p-0">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-center p-0 relative h-48 w-full">
                      <img
                        src="/pilketos.png"
                        alt="Pilketos"
                        className="object-contain rounded-sm absolute h-full w-full"
                      />
                    </div>
                    <Separator className="w-full border rounded-full border-amber-500" />
                  </CardHeader>
                  <CardContent>
                    <p className="text-base font-bold text-center">Pilketos</p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-stone-800" asChild>
                      <Link href="https://pilketos.rizkymaulana.cloud">
                        Lihat Detail
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
              <div className="p-0">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-center p-0 relative h-48 w-full">
                      <img
                        src="/gemar.jpg"
                        alt="Gemar"
                        className="object-cover rounded-sm absolute h-full w-full"
                      />
                    </div>
                    <Separator className="w-full border rounded-full border-amber-500" />
                  </CardHeader>
                  <CardContent>
                    <p className="text-base font-bold text-center">Gemar</p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-stone-800" asChild>
                      <Link href="https://gemar.texaslearning.org">
                        Lihat Detail
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
      <div
        className="flex flex-col justify-center gap-8 px-8 py-12 bg-slate-100 shadow-inner"
        id="kenapa-gabung"
      >
        <p className="text-2xl font-bold text-center underline">
          Kenapa Harus Gabung?
        </p>
        <div className="grid lg:grid-cols-3 gap-8">
          <Card className="w-full">
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
          <Card className="w-full">
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
          <Card className="w-full">
            <CardHeader className="flex flex-col gap-1">
              <CardTitle className="text-base font-bold">
                Komunitas yang Asik dan Supportif
              </CardTitle>
              <Separator className="w-full border rounded-full border-amber-500" />
              <CardDescription className="text-sm font-medium text-justify text-stone-800">
                Gabung di grup belajar, dan berkolaborasi dalam proyek menarik.
                Di sini, kita saling dukung dan bertumbuh bareng.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
      <div className="flex flex-col justify-center gap-8 px-8 py-12" id="faq">
        <p className="text-2xl font-bold text-center underline">FAQ</p>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-start text-base font-bold">
              Apa sih Tixar itu?
            </AccordionTrigger>
            <AccordionContent className="text-sm font-medium">
              Tixar adalah komunitas di sekolah kita yang fokus pada
              pengembangan keterampilan digital seperti coding, desain grafis,
              dan keterampilan teknologi lainnya.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-start text-base font-bold">
              Siapa saja yang bisa bergabung?
            </AccordionTrigger>
            <AccordionContent className="text-sm font-medium">
              Semua siswa yang tertarik dan punya semangat untuk belajar coding
              atau desain grafis bisa bergabung!
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-start text-base font-bold">
              Apakah harus punya pengalaman sebelumnya?
            </AccordionTrigger>
            <AccordionContent className="text-sm font-medium">
              Nggak perlu, kok! Kita mulai belajar dari dasar, jadi pemula pun
              sangat welcome.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-start text-base font-bold">
              Kapan dan di mana kegiatan diadakan?
            </AccordionTrigger>
            <AccordionContent className="text-sm font-medium">
              Kegiatan biasanya diadakan setiap Sabtu dan Minggu (8.30 - 11.00)
              di ruangan 3.4A (Texar). Informasi lebih lanjut akan diberikan
              setelah kamu bergabung.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="text-start text-base font-bold">
              Bagaimana cara mendaftar?
            </AccordionTrigger>
            <AccordionContent className="text-sm font-medium">
              Kamu bisa langsung daftar{" "}
              <Button asChild variant="link" className="p-0 font-bold">
                <Link href="https://bit.ly/join-tixar">disini!</Link>
              </Button>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <p className="text-sm font-medium text-center py-2">
        &copy; {new Date().getFullYear()} Rizky Maulana - Tixar.
      </p>
    </div>
  );
}
