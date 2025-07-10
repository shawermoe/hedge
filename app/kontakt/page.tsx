"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function KontaktPage() {
  const [formData, setFormData] = useState({
    ime: "",
    email: "",
    telefon: "",
    tvrtka: "",
    poruka: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Ovdje bi se implementirala logika za slanje forme
    console.log("Form submitted:", formData)
    alert("Hvala vam na upitu! Kontaktirat ćemo vas u najkraćem mogućem roku.")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

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
              <Link href="/kontakt" className="text-blue-600 font-medium">
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
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Kontaktirajte nas</h1>
              <p className="text-xl text-gray-600">
                Spremni smo odgovoriti na sva vaša pitanja i pomoći vam s računovodstvenim potrebama
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <Card className="p-8">
                <CardHeader className="pb-6">
                  <CardTitle className="text-2xl mb-2">Pošaljite nam upit</CardTitle>
                  <CardDescription>Ispunite formu i kontaktirat ćemo vas u najkraćem mogućem roku</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="ime">Ime i prezime *</Label>
                        <Input
                          id="ime"
                          name="ime"
                          type="text"
                          required
                          value={formData.ime}
                          onChange={handleChange}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email adresa *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="mt-1"
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="telefon">Broj telefona</Label>
                        <Input
                          id="telefon"
                          name="telefon"
                          type="tel"
                          value={formData.telefon}
                          onChange={handleChange}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="tvrtka">Naziv tvrtke</Label>
                        <Input
                          id="tvrtka"
                          name="tvrtka"
                          type="text"
                          value={formData.tvrtka}
                          onChange={handleChange}
                          className="mt-1"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="poruka">Poruka *</Label>
                      <Textarea
                        id="poruka"
                        name="poruka"
                        required
                        rows={5}
                        value={formData.poruka}
                        onChange={handleChange}
                        placeholder="Opišite vaše potrebe ili postavite pitanje..."
                        className="mt-1"
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      Pošaljite upit
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-8">
                <Card className="p-6">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl">Kontakt informacije</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Phone className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Telefon</p>
                        <p className="text-gray-600">091 605 2789</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                        <Mail className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Email</p>
                        <p className="text-gray-600">aleksandra@hedge.hr</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Adresa</p>
                        <p className="text-gray-600">
                          Matije Gupca 62
                          <br />
                          31550 Valpovo
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-6">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl">Radno vrijeme</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                        <Clock className="w-5 h-5 text-orange-600" />
                      </div>
                      <div className="space-y-2">
                        <div>
                          <p className="font-medium text-gray-900">Ponedjeljak - Petak</p>
                          <p className="text-gray-600">08:00 - 16:00</p>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">Subota</p>
                          <p className="text-gray-600">Po dogovoru</p>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">Nedjelja</p>
                          <p className="text-gray-600">Zatvoreno</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-6 bg-blue-50">
                  <CardContent>
                    <h3 className="font-semibold text-gray-900 mb-2">Brz odgovor garantiran</h3>
                    <p className="text-gray-600 text-sm">
                      Odgovaramo na sve upite u roku od 24 sata radnim danima. Za hitne slučajeve možete nas
                      kontaktirati telefonski.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Naša lokacija</h2>
              <p className="text-gray-600">Nalazimo se u centru Valpova, lako dostupni svim klijentima</p>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-gray-500 mx-auto mb-4" />
                  <p className="text-gray-600 font-medium">Matije Gupca 62, 31550 Valpovo</p>
                  <p className="text-gray-500 text-sm mt-2">Ovdje bi bila integrirana Google Maps karta</p>
                </div>
              </div>
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
