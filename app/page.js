"use client"

import { useState } from "react"
import { Phone, Mail, MapPin, Facebook, Twitter, Heart, Users, Shield, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"

export default function GauSanskritiDonation() {
  const [selectedAmount, setSelectedAmount] = useState("")
  const [customAmount, setCustomAmount] = useState("")
  const [currency, setCurrency] = useState("INR")
  const [donorInfo, setDonorInfo] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const predefinedAmounts = [500, 1000, 2500, 5000]

  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount)
    setCustomAmount("")
  }

  const handleCustomAmountChange = (value) => {
    setCustomAmount(value)
    setSelectedAmount("")
  }

  const handleDonate = () => {
    const amount = selectedAmount || customAmount
    if (!amount) {
      alert("Please select or enter a donation amount")
      return
    }
    // Here you would integrate with your payment processor
    alert(`Thank you for your donation of ${currency} ${amount}!`)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-red-600 text-white">
        <div className="container mx-auto px-4">
          {/* Top contact bar */}
          <div className="flex flex-col md:flex-row justify-between items-center py-2 text-sm border-b border-red-500">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+91 9319621494</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>contactgausanskriti@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>495A, Sector 2, Block A, Patwari, Greater Noida, Uttar Pradesh (201307)</span>
              </div>
            </div>
            <div className="flex space-x-3">
              <Facebook className="w-4 h-4 cursor-pointer hover:text-red-200" />
              <Twitter className="w-4 h-4 cursor-pointer hover:text-red-200" />
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col md:flex-row justify-between items-center py-4">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <Image
                  src="/logo.jpeg" // relative to /public folder
                  alt="Heart"
                  width={24} // matches w-6 (6 * 4px = 24px)
                  height={24} // matches h-6
                  className="w-6 h-6"
                />
              </div>
              <h1 className="text-2xl font-bold">Gau Sanskriti</h1>
            </div>

          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-teal-500 to-teal-600 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h2 className="text-5xl font-bold leading-tight">
                DONATE TO
                <br />
                GAU SANSKRITI
              </h2>
              <p className="text-xl text-teal-100">
                Help us provide a safe, healthy life for cows. Your donation helps us treat them with kindness, care,
                and gentle respect each day.
              </p>
              <p className="text-teal-100">
                We're dedicated to giving cows a safe, healthy life. Treating them with kindness, care, and gentle
                respect each day. Every contribution makes a difference in their lives and helps us continue our mission
                of cow protection and care.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button
                  size="lg"
                  className="bg-white text-teal-600 hover:bg-gray-100"
                  onClick={() => document.getElementById("donation-form").scrollIntoView({ behavior: "smooth" })}
                >
                  Donate Now
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-teal-600"
                >
                  Learn More
                </Button>
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <Image
                  src="/DSC08481.jpg"
                  alt="Cow care at Gau Sanskriti"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sanskrit Quote Section */}
      <section className="py-12 bg-gradient-to-r from-orange-50 to-red-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-red-700 mb-4 font-serif">
              यत्र गावः प्रसन्नाः स्युः प्रसन्नात्मत्र लक्ष्मीः । यत्र गावो विषण्णाः स्युर्विषण्णात्मत्र लक्ष्मीः ॥
            </h2>
            <p className="text-lg md:text-xl text-gray-700 font-medium">
              Where cows are happy, prosperity is there. Where cows are in grief, adversity is there.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto">
                <Heart className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800">500+</h3>
              <p className="text-gray-600">Cows Protected</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800">1000+</h3>
              <p className="text-gray-600">Supporters</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto">
                <Shield className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800">24/7</h3>
              <p className="text-gray-600">Care & Protection</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gaugrass Program Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Gaugrass for Stray Gauvansh</h2>
              <p className="text-xl text-gray-600">A small offering of Gaugrass, a big step toward blessings</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <Card className="bg-orange-50 border-orange-200">
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold text-orange-700 mb-4">Our Gaugrass Initiative</h3>
                    <p className="text-gray-700 mb-4">
                      We provide fresh, nutritious grass and fodder to stray cows who struggle to find adequate food.
                      Your contribution helps us ensure that no cow goes hungry.
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <span>Daily fresh grass collection and distribution</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <span>Nutritious fodder preparation</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <span>Regular feeding schedules</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <span>Medical care during feeding</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Monthly Goal Progress</h4>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Current Progress</span>
                    <span className="text-sm font-semibold text-teal-600">28% Complete</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
                    <div className="bg-teal-600 h-3 rounded-full" style={{ width: "28%" }}></div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <p className="text-2xl font-bold text-gray-800">31 Lakh Kg</p>
                      <p className="text-sm text-gray-600">Total Fodder Required</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-teal-600">Jun 2025</p>
                      <p className="text-sm text-gray-600">Target Month</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Image
                  src="/DSC08479.jpg"
                  alt="Cow being fed grass"
                  width={300}
                  height={200}
                  className="rounded-lg object-cover"
                />
                <Image
                  src="/DSC08478.jpg"
                  alt="Fresh grass preparation"
                  width={300}
                  height={200}
                  className="rounded-lg object-cover"
                />
                <Image
                  src="/DSC08476.jpg"
                  alt="Fodder distribution"
                  width={300}
                  height={200}
                  className="rounded-lg object-cover"
                />
                <Image
                  src="/DSC08431.jpg"
                  alt="Cow care and feeding"
                  width={300}
                  height={200}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Form Section */}
      <section id="donation-form" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Make a Donation</h2>
              <p className="text-xl text-gray-600">Your contribution helps us provide better care for cows in need</p>
            </div>

           <Card className="shadow-lg">
  <CardHeader className="bg-teal-50">
    <CardTitle className="text-2xl text-center text-teal-700">Choose Payment Method</CardTitle>
  </CardHeader>
  <CardContent className="p-8">
    <div className="bg-orange-50 p-4 rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* QR Code / UPI Section */}
       <div className="text-center">
  <h5 className="text-sm font-medium mb-2">QR Code / UPI</h5>
  <div className="bg-white p-3 rounded border-2 border-dashed border-orange-300">
    <div className="w-32 h-32 mx-auto mb-2">
      <img
        src="/pay.jpg"
        alt="SBI QR Code for Gau Sanskriti"
        className="w-full h-full object-contain rounded"
      />
    </div>
    <p className="text-xs text-gray-600 mb-2">UPI ID: <strong>gausanskritiprivatelimited001@sbi</strong></p>
    <Button size="sm" variant="outline" className="text-xs">
      Scan & Pay
    </Button>
  </div>
</div>


        {/* Bank Account Section */}
        <div className="text-center">
          <h5 className="text-sm font-medium mb-2">Bank A/C Number</h5>
          <div className="bg-white p-3 rounded border-2 border-dashed border-orange-300 space-y-1">
            <p className="text-xs text-gray-600">
              Account Number: <strong>60532815886</strong>
            </p>
            <p className="text-xs text-gray-600">
              IFSC Code: <strong>MAHB0000343</strong>
            </p>
            <p className="text-xs text-gray-600">
              Account Holder: <strong>Gau Sanskriti Private Limited</strong>
            </p>
            <p className="text-xs text-gray-600">
              Bank Name: <strong>Bank of Maharashtra</strong>
            </p>
            <p className="text-xs text-gray-600">
              Branch: <strong>Connaught Place Branch</strong>
            </p>

            <Button
              size="sm"
              variant="outline"
              className="mt-2 text-xs bg-orange-600 text-white hover:bg-orange-700"
            >
              Copy Details
            </Button>
          </div>
        </div>
      </div>
    </div>
  </CardContent>
</Card>

          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">Our Mission</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                  <Heart className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold">Care & Protection</h3>
                <p className="text-gray-600">Providing safe shelter and medical care for cows in need</p>
              </div>
              <div className="space-y-4">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                  <Target className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold">Sustainable Future</h3>
                <p className="text-gray-600">Building a sustainable ecosystem for cow protection and care</p>
              </div>
              <div className="space-y-4">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                  <Users className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold">Community Support</h3>
                <p className="text-gray-600">Engaging communities in cow protection and awareness programs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Gallery */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Achievements</h2>
              <p className="text-xl text-gray-600">See the impact of your donations in action</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <Image
                    src="/DSC08426.jpg"
                    alt="Medical care for cows"
                    width={400}
                    height={250}
                    className="w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-semibold">Medical Care</h3>
                    <p className="text-sm">Professional veterinary treatment</p>
                  </div>
                </div>
              </Card>

              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <Image
                    src="/DSC08425.jpg"
                    alt="Feeding program"
                    width={400}
                    height={250}
                    className="w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-semibold">Daily Feeding</h3>
                    <p className="text-sm">Nutritious meals for all cows</p>
                  </div>
                </div>
              </Card>

              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <Image
                    src="/DSC08422.jpg"
                    alt="Shelter construction"
                    width={400}
                    height={250}
                    className="w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-semibold">Safe Shelter</h3>
                    <p className="text-sm">Comfortable living spaces</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold">Gau Sanskriti</h3>
              </div>
              <p className="text-gray-300">
                Dedicated to providing care, protection, and a safe environment for cows. Every donation helps us
                continue our mission of compassionate cow care.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+91 9319621494</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>contactgausanskriti@gmail.com</span>
                </div>
                <div className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 mt-1" />
                  <span>495A, Sector 2, Block A, Patwari, Greater Noida, Uttar Pradesh (201307)</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                  Home
                </a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                  Mission
                </a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                  Vision
                </a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                  About Us
                </a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                  Contact
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 Gau Sanskriti. All rights reserved. Made with ❤️ for cow protection.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
