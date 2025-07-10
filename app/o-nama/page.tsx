import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, Users, Clock, Target } from "lucide-react"
import Link from "next/link"

export default function ONamaPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header - same as homepage */}
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
              <Link href="/o-nama" className="text-blue-600 font-medium">
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

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">O nama</h1>
              <p className="text-xl text-gray-600">
                HEDGE d.o.o. je vaš pouzdani partner za računovodstvene i porezne usluge u Valpovu i široj regiji
              </p>
            </div>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Naša priča</h2>
                  <p className="text-gray-600 mb-4">
                    HEDGE d.o.o. osnovana je s ciljem pružanja vrhunskih računovodstvenih i poreznih usluga malim i
                    srednjim poduzećima u Valpovu i okolici. Naš tim čine iskusni stručnjaci koji razumiju specifičnosti
                    lokalnog tržišta.
                  </p>
                  <p className="text-gray-600 mb-4">
                    Vjerujemo da svako poduzeće zaslužuje profesionalnu podršku u financijskom upravljanju. Zato
                    pristupamo svakom klijentu individualno, prilagođavajući naše usluge specifičnim potrebama vašeg
                    poslovanja.
                  </p>
                  <p className="text-gray-600">
                    Naša misija je omogućiti vam da se fokusirate na ono što najbolje radite, dok mi vodimo brigu o
                    vašim financijskim obvezama i računovodstvu.
                  </p>
                </div>
                <div className="bg-gray-100 p-8 rounded-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Naše vrijednosti</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-gray-700">Profesionalnost u svakom koraku</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-gray-700">Transparentnost i povjerenje</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-gray-700">Personalizirani pristup</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-gray-700">Kontinuirano usavršavanje</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Brojke koje govore o nama</h2>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-blue-600">50+</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Zadovoljnih klijenata</CardDescription>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-green-600" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-green-600">5+</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Godina iskustva</CardDescription>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-purple-600" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-purple-600">100%</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Stopa zadovoljstva</CardDescription>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-orange-600" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-orange-600">24h</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Vrijeme odgovora</CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Spremni za suradnju?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Kontaktirajte nas danas i saznajte kako možemo pomoći vašem poslovanju
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/kontakt">Kontaktirajte nas</Link>
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

      {/* Footer - same as homepage */}
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
