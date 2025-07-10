import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calculator, FileText, TrendingUp, Users, Briefcase, Shield } from "lucide-react"
import Link from "next/link"

export default function UslugePage() {
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
                <h1 className="text-xl font-bold text-gray-900">HEDGE d.o.o.</h1>
                <p className="text-sm text-gray-600">Računovodstvene i porezne usluge</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">
                Naslovnica
              </Link>
              <Link href="/o-nama" className="text-gray-700 hover:text-blue-600 font-medium">
                O nama
              </Link>
              <Link href="/usluge" className="text-blue-600 font-medium">
                Usluge
              </Link>
              <Link href="/cijene" className="text-gray-700 hover:text-blue-600 font-medium">
                Cijene
              </Link>
              <Link href="/kontakt" className="text-gray-700 hover:text-blue-600 font-medium">
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
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Naše usluge</h1>
              <p className="text-xl text-gray-600">
                Kompletne računovodstvene i porezne usluge prilagođene potrebama vašeg poslovanja
              </p>
            </div>
          </div>
        </section>

        {/* Main Services */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calculator className="w-8 h-8 text-blue-600" />
                  </div>
                  <CardTitle>Računovodstvo</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Kompletno vođenje poslovnih knjiga, evidencija prometa i izrada financijskih izvještaja
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText className="w-8 h-8 text-green-600" />
                  </div>
                  <CardTitle>Porezno savjetovanje</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Stručno savjetovanje o poreznim obvezama, optimizaciji i usklađenosti s propisima
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-purple-600" />
                  </div>
                  <CardTitle>Financijski izvještaji</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Izrada i analiza financijskih izvještaja za bolje razumijevanje poslovanja
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-orange-600" />
                  </div>
                  <CardTitle>Poslovni savjeti</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Personalizirano savjetovanje za optimalno poslovanje i financijsko planiranje
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Detailed Services */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Detaljne usluge</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Pružamo sveobuhvatan spektar usluga za sve vaše računovodstvene i porezne potrebe
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Računovodstvene usluge */}
              <Card className="p-8">
                <CardHeader className="pb-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Calculator className="w-6 h-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-2xl">Računovodstvene usluge</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">Vođenje poslovnih knjiga</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">Evidencija prometa i troškova</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">Izrada bilance i računa dobiti i gubitka</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">Mjesečni i godišnji izvještaji</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">Analiza financijskih pokazatelja</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Porezne usluge */}
              <Card className="p-8">
                <CardHeader className="pb-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <FileText className="w-6 h-6 text-green-600" />
                    </div>
                    <CardTitle className="text-2xl">Porezne usluge</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">Izrada poreznih prijava</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">PDV prijave i obračuni</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">Porezno planiranje i optimizacija</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">Zastupanje pred poreznim tijelima</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">Savjetovanje o poreznim propisima</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Dodatne usluge */}
              <Card className="p-8">
                <CardHeader className="pb-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Briefcase className="w-6 h-6 text-purple-600" />
                    </div>
                    <CardTitle className="text-2xl">Dodatne usluge</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">Osnivanje društava</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">Registracija kod nadležnih tijela</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">Obračun plaća i doprinosa</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">Financijsko planiranje</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">Poslovni savjeti i konzultacije</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Specijalizirane usluge */}
              <Card className="p-8">
                <CardHeader className="pb-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <Shield className="w-6 h-6 text-orange-600" />
                    </div>
                    <CardTitle className="text-2xl">Specijalizirane usluge</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">Restrukturiranje poslovanja</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">Due diligence pregledi</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">Procjena vrijednosti poduzeća</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">Kontroling i upravljačko računovodstvo</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">Priprema za reviziju</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Trebate našu pomoć?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Kontaktirajte nas za besplatnu konzultaciju i saznajte kako možemo pomoći vašem poslovanju
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
                <Link href="/cijene">Pogledajte cijene</Link>
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
              <p className="text-gray-400">Profesionalne računovodstvene i porezne usluge u Valpovu</p>
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
            <p>&copy; {new Date().getFullYear()} HEDGE d.o.o. Sva prava pridržana.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
