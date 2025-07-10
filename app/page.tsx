import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calculator, FileText, TrendingUp, Users, CheckCircle, Phone, Mail, MapPin } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
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
              <Link href="/usluge" className="text-gray-700 hover:text-blue-600 font-medium">
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

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Profesionalne računovodstvene usluge u <span className="text-blue-600">Valpovu</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Pružamo kompletne računovodstvene i porezne usluge za mala i srednja poduzeća. Vaš uspjeh je naš
              prioritet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/usluge">Pogledajte naše usluge</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/kontakt">Zatražite ponudu</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Naše usluge</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Nudimo sveobuhvatan spektar računovodstvenih i poreznih usluga prilagođenih vašim potrebama
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calculator className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle>Računovodstvo</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Kompletno vođenje poslovnih knjiga i financijskih izvještaja</CardDescription>
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
                <CardDescription>Stručno savjetovanje o poreznim obvezama i optimizaciji</CardDescription>
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
                <CardDescription>Izrada i analiza financijskih izvještaja za bolje poslovanje</CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-orange-600" />
                </div>
                <CardTitle>Savjetovanje</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Personalizirano savjetovanje za optimalno poslovanje</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Zašto odabrati HEDGE d.o.o.?</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Dugogodišnje iskustvo</h3>
                    <p className="text-gray-600">Stručni tim s bogatim iskustvom u računovodstvu i porezima</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Personalizirani pristup</h3>
                    <p className="text-gray-600">Svaki klijent je jedinstven - prilagođavamo usluge vašim potrebama</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Lokalna dostupnost</h3>
                    <p className="text-gray-600">Smješteni u Valpovu - uvijek dostupni za osobne konzultacije</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Transparentne cijene</h3>
                    <p className="text-gray-600">Jasne i konkurentne cijene bez skrivenih troškova</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Kontaktirajte nas danas</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">091 605 2789</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">aleksandra@hedge.hr</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">Matije Gupca 62, 31550 Valpovo</span>
                </div>
              </div>
              <Button className="w-full mt-6" asChild>
                <Link href="/kontakt">Pošaljite upit</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

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
