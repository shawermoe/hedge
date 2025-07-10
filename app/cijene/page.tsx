import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check, Star } from "lucide-react";
import Link from "next/link";

export default function CijenePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">H</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">
                  HEDGE d.o.o.
                </h1>
                <p className="text-sm text-gray-600">
                  Računovodstvene i porezne usluge
                </p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link
                href="/"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Naslovnica
              </Link>
              <Link
                href="/o-nama"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                O nama
              </Link>
              <Link
                href="/usluge"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Usluge
              </Link>
              <Link href="/cijene" className="text-blue-600 font-medium">
                Cijene
              </Link>
              <Link
                href="/kontakt"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Kontakt
              </Link>
            </nav>
            <Button asChild className="hidden md:inline-flex">
              <Link href="/kontakt">Kontaktirajte nas</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Naše cijene
              </h1>
              <p className="text-xl text-gray-600">
                Transparentne i konkurentne cijene prilagođene veličini i
                potrebama vašeg poslovanja
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Basic Plan */}
              <Card className="relative">
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl mb-2">Osnovni paket</CardTitle>
                  <CardDescription className="text-gray-600 mb-4">
                    Idealno za mala poduzeća i obrtnike
                  </CardDescription>
                  <div className="text-4xl font-bold text-gray-900">
                    100€ 
                    <span className="text-lg font-normal text-gray-600">
                      / mjesečno
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center space-x-2">
                      <Check className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700">
                        Vođenje poslovnih knjiga
                      </span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Check className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700">
                        Mjesečni financijski izvještaji
                      </span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Check className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700">PDV prijave</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Check className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700">
                        Godišnja porezna prijava
                      </span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Check className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700">
                        Osnovno porezno savjetovanje
                      </span>
                    </li>
                  </ul>
                  <Button className="w-full" asChild>
                    <Link href="/kontakt">Odaberite paket</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Standard Plan */}
              <Card className="relative border-blue-500 border-2">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                    <Star className="w-4 h-4" />
                    <span>Najpopularniji</span>
                  </div>
                </div>
                <CardHeader className="text-center pb-8 pt-8">
                  <CardTitle className="text-2xl mb-2">
                    Standardni paket
                  </CardTitle>
                  <CardDescription className="text-gray-600 mb-4">
                    Najbolji izbor za srednja poduzeća
                  </CardDescription>
                  <div className="text-4xl font-bold text-gray-900">
                    200€ 
                    <span className="text-lg font-normal text-gray-600">
                      / mjesečno
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center space-x-2">
                      <Check className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700">
                        Sve iz osnovnog paketa
                      </span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Check className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700">
                        Detaljni financijski izvještaji
                      </span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Check className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700">
                        Analiza financijskih pokazatelja
                      </span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Check className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700">
                        Obračun plaća (do 5 zaposlenih)
                      </span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Check className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700">
                        Prošireno porezno savjetovanje
                      </span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Check className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700">
                        Mjesečne konzultacije
                      </span>
                    </li>
                  </ul>
                  <Button className="w-full" asChild>
                    <Link href="/kontakt">Odaberite paket</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Premium Plan */}
              <Card className="relative">
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl mb-2">Premium paket</CardTitle>
                  <CardDescription className="text-gray-600 mb-4">
                    Kompletan servis za veća poduzeća
                  </CardDescription>
                  <div className="text-4xl font-bold text-gray-900">
                    300€ 
                    <span className="text-lg font-normal text-gray-600">
                      / mjesečno
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center space-x-2">
                      <Check className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700">
                        Sve iz standardnog paketa
                      </span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Check className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700">
                        Upravljačko računovodstvo
                      </span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Check className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700">
                        Financijsko planiranje
                      </span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Check className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700">
                        Neograničen broj zaposlenih
                      </span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Check className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700">Prioritetna podrška</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Check className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700">Tjedne konzultacije</span>
                    </li>
                  </ul>
                  <Button className="w-full" asChild>
                    <Link href="/kontakt">Odaberite paket</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Dodatne usluge
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Uz naše pakete možete dodati i specijalizirane usluge prema
                potrebi
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-lg">Osnivanje društva</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-blue-600 mb-2">
                    400€
                  </div>
                  <CardDescription>Jednokratno</CardDescription>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-lg">
                    Revizija dokumentacije
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-blue-600 mb-2">
                    20€
                  </div>
                  <CardDescription>Po satu</CardDescription>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-lg">
                    Izvanredne konzultacije
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-blue-600 mb-2">
                    20€
                  </div>
                  <CardDescription>Po satu</CardDescription>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-lg">
                    Priprema za reviziju
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-blue-600 mb-2">
                    400€
                  </div>
                  <CardDescription>Jednokratno</CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Često postavljana pitanja
              </h2>
            </div>
            <div className="max-w-3xl mx-auto space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    Postoje li dodatni troškovi?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Naše cijene su transparentne i uključuju sve standardne
                    usluge navedene u paketu. Dodatni troškovi nastaju samo za
                    specijalizirane usluge koje nisu uključene u osnovni paket.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    Mogu li promijeniti paket tijekom godine?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Da, možete nadograditi ili promijeniti paket u bilo kojem
                    trenutku ovisno o potrebama vašeg poslovanja. Kontaktirajte
                    nas za prilagodbu usluga.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    Kako se vrši naplata?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Naplata se vrši mjesečno, unaprijed. Prihvaćamo bankovni
                    transfer i gotovinski način plaćanja. Račun izdajemo do 5. u
                    mjesecu za tekući mjesec.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Trebate personaliziranu ponudu?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Kontaktirajte nas za prilagođenu ponudu koja odgovara
              specifičnostima vašeg poslovanja
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/kontakt">Zatražite ponudu</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-blue-600 bg-transparent"
                asChild
              >
                <Link href="/usluge">Pogledajte usluge</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">H</span>
                </div>
                <span className="text-xl font-bold">HEDGE d.o.o.</span>
              </div>
              <p className="text-gray-400">
                Profesionalne računovodstvene i porezne usluge u Valpovu
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Stranice</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/" className="hover:text-white">
                    Naslovnica
                  </Link>
                </li>
                <li>
                  <Link href="/o-nama" className="hover:text-white">
                    O nama
                  </Link>
                </li>
                <li>
                  <Link href="/usluge" className="hover:text-white">
                    Usluge
                  </Link>
                </li>
                <li>
                  <Link href="/cijene" className="hover:text-white">
                    Cijene
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Usluge</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Računovodstvo</li>
                <li>Porezno savjetovanje</li>
                <li>Financijski izvještaji</li>
                <li>Poslovni savjeti</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Kontakt</h4>
              <div className="space-y-2 text-gray-400">
                <p>Matije Gupca 62</p>
                <p>31550 Valpovo</p>
                <p>091 605 2789</p>
                <p>aleksandra@hedge.hr</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} HEDGE d.o.o. Sva prava
              pridržana.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
