import PopularProductsWeek from "@/components/popular-products-week";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { ArrowDown, CreditCard, Info, ShoppingBag } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Support 24/7",
    description: "Online 24 hours",
    icon: <Info className="text-orange-500"/>
  },
  {
    id: 2,
    title: "Payment",
    description: "See all methods",
    icon: <CreditCard className="text-orange-500"/>
  },
  {
    id: 3,
    title: "Shopping cart",
    description: "Save your items",
    icon: <ShoppingBag className="text-orange-500"/>
  }
]

export default function Home() {
  return (

    // homepage main
    <main>

      {/* presentation */}
      <div className="h-[90vh] flex items-center justify-start px-16">
        <div className="w-2/4 flex flex-col gap-4">
          <h1 className="text-7xl font-bold">Welcome to Pypestore!</h1>

          <span>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et ullam dolorem ad, exercitationem doloribus nostrum voluptatum odit doloremque! Debitis est iure nobis molestiae vel tempore quia quis minima harum sunt?
          </span>

          <Button className="w-64 mt-6">
            Let's start 
            <ArrowDown className="w-4 h-4"/>
          </Button>
        </div>
      </div>

      {/* home */}
      <div className="bg-slate-200 h-screen flex items-center flex-col gap-16 py-10 px-16">

        {/* services */}
        <div className="flex gap-16">
          {services.map((service) => {
            return (
              <Card key={service.id} className="w-52 p-4 flex items-center gap-3 rounded-sm">
                {service.icon}

                <div>
                  <CardTitle>
                    {service.title}
                  </CardTitle>
                  <CardDescription>
                    {service.description}
                  </CardDescription>
                </div>
              </Card>
            )
          })}
        </div>

        <h1 className="font-bold text-xl">
          Popular this week
        </h1>

        {/* popular products this week */}
        <PopularProductsWeek />
      </div>
    </main>
  )
}
