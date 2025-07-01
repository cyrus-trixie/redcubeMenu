import React, { useState } from "react";
import {
  ChefHat,
  Flame,
  Star,
  Coffee,
  Wine,
  Utensils,
  Heart,
} from "lucide-react";
import beefSausage from "../assets/dishes/beefsausage.jpg";
import bestbreakfast from "../assets/dishes/bestbreakfast.jpg";
import chocolateTea from "../assets/dishes/chocolate tea.jpg";
import chomaSausage from "../assets/dishes/choma sausage.jpg";
import englishBreakfast from "../assets/dishes/englishbreakfast.jpg";
import frenchToast from "../assets/dishes/frenchToast.jpg";
import gingerTea from "../assets/dishes/ginger tea.jpg";
import lambChops from "../assets/dishes/lambChops.jpg";
import lemonTea from "../assets/dishes/lemon tea.jpg";
import milkshake from "../assets/dishes/milkshake.jpg";
import miniBreakfast from "../assets/dishes/mini breakfast.jpg";
import pancakes from "../assets/dishes/pancakes.jpg";
import porkChoma from "../assets/dishes/porkChoma.jpg";
import specialTea from "../assets/dishes/special tea.jpg";
import chipsMasala from "../assets/dishes/chipsMasala.jpg";
import chipsMayai from "../assets/dishes/chipsMayai.jpg";
import extraHoney from "../assets/dishes/extraHoney.jpg";
import FishFingers from "../assets/dishes/FishFingers.jpg";
import Gizzards from "../assets/dishes/Gizzards.jpg";
import HotdogChipsSalad from "../assets/dishes/HotdogChipsSalad.jpg";
import mandazi from "../assets/dishes/mandazi.jpg";
import platter1 from "../assets/dishes/platter1.jpg";
import platter2 from "../assets/dishes/platter2.jpg";
import platter3 from "../assets/dishes/platter3.jpg";
import platter4 from "../assets/dishes/platter4.jpg";
import SauteePotatoes from "../assets/dishes/SauteePotatoes.jpg";
import mutura from "../assets/dishes/mutura.jpg";
import roastedPotato from "../assets/dishes/roastedPotato.jpg";
import caesarSaladCrispyChicken from "../assets/dishes/caesar-salad-crispy-chicken.jpg";
import coleslaw from "../assets/dishes/coleslaw.jpg";
import kukuChoma from "../assets/dishes/kuku-choma.jpg";
import mbuziChoma from "../assets/dishes/mbuziChoma.jpg";
import porkChomaJpeg from "../assets/dishes/porkChoma.jpeg";
const menuData = [
  /* --------------------------------------------------- MAIN */
  {
    id: "mains",
    title: "Main Meals",
    icon: ChefHat,
    gradient: "from-orange-400 to-red-500",
    items: [
      {
        name: "Pepper Steak",
        description:
          "Tender beef steak coated in a spicy pepper crust, served sizzling hot with your choice of side.",
        price: "KSH 600",
        image: "https://www.alphafoodie.com/wp-content/uploads/2023/04/Pepper-Steak-square.jpeg",
        featured: true,
      },
      {
        name: "Lamb Chops",
        description:
          "Juicy lamb chops marinated in garlic & rosemary, flame‑grilled to perfection.",
        price: "KSH 550",
        image: lambChops,
      },
      {
        name: "Fish Fillet",
        description:
          "Crispy‑outside, flaky‑inside fillet of tilapia with a tangy tartar dip.",
        price: "KSH 1000",
        image: "https://www.thespruceeats.com/thmb/B2oWCR7mIqoNEAOLCQoCuB3GKqU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/easy-fried-fish-fillets-3056505-Final-5b9fc8b6c9e77c0050cd8171-e0c602a3dbae4d56955ea69bb4100207.jpg",
      },
      {
        name: "Chicken (½)",
        description:
          "Grilled country chicken brushed with our signature herb butter glaze.",
        price: "KSH 550",
        image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=800&h=600&fit=crop",
      },
      {
        name: "Tilapia (whole)",
        description:
          "Fresh‑from‑Lake‑Vic tilapia, charcoal‑grilled & finished with lemon‑garlic butter.",
        price: "KSH 1250",
        image: "https://gingerandseasalt.com/wp-content/uploads/2023/09/grilled-tilapia-on-fish-plate.jpg",
      },
      {
        name: "Ginger Chicken",
        description:
          "Slow‑cooked chicken simmered in a zesty ginger & soy reduction.",
        price: "KSH 550",
        image: "https://christieathome.com/wp-content/uploads/2023/06/Ginger-Chicken-16-1.jpg",
      },
      {
        name: "Redcube Special",
        description:
          "Chef's secret curry – rich, creamy & dangerously addictive. Comes with rice or chapati.",
        price: "KSH 1500",
        image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&h=600&fit=crop",
        featured: true,
      },
      {
        name: "Chicken BBQ",
        description:
          "Smoky BBQ chicken quarters, lacquered in our house sauce.",
        price: "KSH 1500",
        image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=800&h=600&fit=crop",
      },
      {
        name: "Honey‑Glazed Chicken",
        description:
          "Sweet‑meets‑savory: slow‑roasted chicken finished with sticky honey glaze.",
        price: "KSH 1500",
        image: "https://northeastnosh.com/wp-content/uploads/2024/11/Sweet-Spicy-Honey-Glazed-Chicken.jpg",
      },
    ],
  },
  /* -------------------------------------------- CHOMA / FRY */
  {
    id: "choma",
    title: "Choma / Fry",
    icon: Flame,
    gradient: "from-green-400 to-emerald-500",
    items: [
      {
        name: "Mbuzi Choma",
        description: "Charcoal‑roasted goat, served juicy & tender – perfect for sharing.",
        price: "KSH 1400",
        image: mbuziChoma,
        featured: true,
      },
      {
        name: "Beef Fry",
        description: "Pan‑seared beef cubes finished with onions, tomatoes & secret spices.",
        price: "KSH 1200",
        image: "https://soupeduprecipes.com/wp-content/uploads/2022/04/how-to-make-stir-fry-beef-with-celery-recipe-500x500.png?crop=1",
      },
      {
        name: "Pork Choma",
        description: "Slow‑roasted pork cuts, crackly on the outside, juicy inside.",
        price: "KSH 1500",
        image: porkChomaJpeg,
      },
      {
        name: "Chicken Broiler",
        description: "Crispy‑skin broiler chicken, butter‑basted & flame‑kissed.",
        price: "KSH 1500",
        image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=800&h=600&fit=crop",
      },
      {
        name: "Chicken Kienyeji",
        description: "Free‑range kienyeji chicken, stewed with traditional herbs.",
        price: "KSH 1800",
        image: "https://img-global.cpcdn.com/recipes/e50ebe2154d9ce83/1200x630cq70/photo.jpg",
      },
      {
        name: "Kuku Choma",
        description: "Charcoal-grilled chicken, crispy skin, juicy inside, Kenyan style.",
        price: "KSH 1500",
        image: kukuChoma,
      },
    ],
  },
  /* -------------------------------------------- KIDS CORNER */
  {
    id: "kids",
    title: "Kids Corner",
    icon: Star,
    gradient: "from-blue-400 to-purple-500",
    items: [
      {
        name: "Chicken Tenders",
        description: "Crispy strips of chicken breast with a side of ketchup.",
        price: "KSH 500",
        image: "https://images.unsplash.com/photo-1562967914-608f82629710?w=800&h=600&fit=crop",
      },
      {
        name: "Chicken Lolipop",
        description: "Fun, drumette‑style chicken pops glazed in sweet chili sauce.",
        price: "KSH 500",
        image: "https://www.yummytummyaarthi.com/wp-content/uploads/2021/11/chicken-lollipop-1.jpeg",
        featured: true,
      },
      {
        name: "Spaghetti Bolognese",
        description: "Classic Italian meat sauce tossed with al‑dente spaghetti.",
        price: "KSH 500",
        image: "https://www.slimmingeats.com/blog/wp-content/uploads/2010/04/spaghetti-bolognese-36-720x720.jpg",
      },
      {
        name: "Ice Cream Scoop",
        description: "Vanilla, chocolate or strawberry – pick your fave!",
        price: "KSH 250",
        image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=800&h=600&fit=crop",
      },
      {
        name: "Hot Dog",
        description: "Classic frank in a soft roll – kid‑approved goodness.",
        price: "KSH 300",
        image: "https://static01.nyt.com/images/2024/06/28/multimedia/28GRILL-HOTDOGS-REX-cqwj/01GRILL-HOTDOGS-REX-cqwj-mediumSquareAt3X.jpg",
      },
      {
        name: "Mini Burger",
        description: "Bite‑sized beef slider topped with cheese & house sauce.",
        price: "KSH 500",
        image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800&h=600&fit=crop",
      },
    ],
  },
  /* ---------------------------------------------- BREAKFAST */
  {
    id: "breakfast",
    title: "Breakfast",
    icon: Coffee,
    gradient: "from-pink-500 to-red-400",
    items: [
      {
        name: "English Breakfast",
        description:
          "Bacons, Eggs, Sausages, Grilled Tomato, Fried mushrooms/ Baked beans & Toast",
        price: "KSH 1200",
        image: englishBreakfast,
      },
      {
        name: "Best Breakfast",
        description: "Bread, Bacons, Eggs, Sausages, Toast / Pancake",
        price: "KSH 800",
        image: bestbreakfast,
        featured: true,
      },
      {
        name: "Mini Breakfast",
        description: "Omellette, 1 Sausage, Toast, Eggs, Tea & Coffee",
        price: "KSH 500",
        image: miniBreakfast,
      },
      {
        name: "Pancakes",
        description: "Fluffy pancakes served with maple syrup and butter",
        price: "KSH 400",
        image: pancakes,
      },
      {
        name: "French Toast",
        description: "Golden-brown french toast with cinnamon and sugar",
        price: "KSH 350",
        image: frenchToast,
      },
      {
        name: "Avocado Toast",
        description: "Smashed avocado on artisan bread with poached egg",
        price: "KSH 450",
        image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=800&h=600&fit=crop",
      },
    ],
  },
  /* ---------------------------------------------- BEVERAGES */
  {
    id: "beverages",
    title: "Beverages",
    icon: Coffee,
    gradient: "from-red-500 to-red-400",
    items: [
      {
        name: "Milk Coffee",
        description: "Rich Kenyan coffee mellowed with steamed milk.",
        price: "KSH 200",
        image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&h=600&fit=crop",
      },
      {
        name: "Tea Masala",
        description: "Spiced black tea – the ultimate local comfort drink.",
        price: "KSH 160",
        image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=800&h=600&fit=crop",
        featured: true,
      },
      {
        name: "Ginger Tea",
        description: "Fresh ginger‑infused tea – zingy & soothing.",
        price: "KSH 160",
        image: gingerTea,
      },
      {
        name: "Chocolate Tea",
        description: "Velvety hot chocolate brewed Kenyan‑style.",
        price: "KSH 120",
        image: chocolateTea,
      },
      {
        name: "Lemon Tea",
        description: "Zesty lemon & black tea – immune boost in a cup.",
        price: "KSH 130",
        image: lemonTea,
      },
      {
        name: "Glass of Milk",
        description: "250ml fresh farm milk, hot or cold.",
        price: "KSH 100",
        image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=800&h=600&fit=crop",
      },
      {
        name: "Milkshake (Vanilla/Strawberry)",
        description: "Thick, creamy & brain‑freeze worthy.",
        price: "KSH 350",
        image: milkshake,
      },
      {
        name: "Smoothie",
        description: "Blend of seasonal fruits & yoghurt – pure vibes.",
        price: "KSH 250",
        image: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=800&h=600&fit=crop",
      },
      {
        name: "Special Tea (Tangawizi/Honey)",
        description: "House chai twisted with ginger & honey.",
        price: "KSH 200",
        image: specialTea,
      },
    ],
  },
  /* -------------------------------------- SNACKS, SALADS & EXTRAS */
  {
    id: "snacks-salads-extras",
    title: "Snacks, Salads & Extras",
    icon: Utensils,
    gradient: "from-green-500 to-blue-400",
    items: [
      // Snacks
      { name: "Beef Sausage", description: "Pan‑fried beef sausage, juicy & smoky.", price: "KSH 70", image: beefSausage},
      { name: "Choma Sausage", description: "Char‑grilled sausage with a crispy snap.", price: "KSH 120", image: chomaSausage },
      { name: "Samosa", description: "Crispy pastry stuffed with spiced minced beef.", price: "KSH 60", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&h=600&fit=crop" },
      { name: "Mandazi", description: "Pillow‑soft Swahili doughnut, lightly sugared.", price: "KSH 50", image: mandazi},
      { name: "French Fries", description: "Golden‑fried potato sticks, salt‑sprinkled.", price: "KSH 200", image: "https://images.unsplash.com/photo-1576107232684-1279f390859f?w=800&h=600&fit=crop" },
      { name: "Roasted Potatoes", description: "Herb‑seasoned wedges, oven‑roasted.", price: "KSH 250", image: roastedPotato },
      { name: "Beef Burger", description: "Quarter‑pound patty, cheese, lettuce & house sauce.", price: "KSH 900", featured: true, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&h=600&fit=crop" },
      { name: "Mutura", description: "Kenyan street‑style blood sausage, smoky & spicy.", price: "KSH 300", image: mutura },
      { name: "Chips Masala", description: "Fries tossed in tomato masala & dhania.", price: "KSH 250", image: chipsMasala },
      { name: "Chips Mayai", description: "Fries bound in a fluffy egg omelette.", price: "KSH 280", image: chipsMayai },
      { name: "Sautee Potatoes", description: "Butter‑pan potatoes with herbs.", price: "KSH 250", image: SauteePotatoes },
      { name: "Hotdog + Chips + Salad", description: "The ultimate trio plate.", price: "KSH 550", image: HotdogChipsSalad },
      { name: "Fish Fingers", description: "Breaded fish strips with tartar dip.", price: "KSH 450", image: FishFingers },
      { name: "Chicken Nuggets", description: "Crispy chicken bites – can't eat just one.", price: "KSH 500", image: "https://images.unsplash.com/photo-1562967914-608f82629710?w=800&h=600&fit=crop" },
      { name: "Gizzards", description: "Spicy fried chicken gizzards, a local fave.", price: "KSH 450", image: Gizzards },
      { name: "Chicken Wings", description: "6pc wings glazed in BBQ sauce.", price: "KSH 500", image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=800&h=600&fit=crop" },
      { name: "Chicken / Beef Burger", description: "Pick your protein – same epic toppings.", price: "KSH 900", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&h=600&fit=crop" },
      { name: "Chicken/Beef/Egg Sandwich", description: "Toasted triple‑decker classic.", price: "KSH 450", image: "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?w=800&h=600&fit=crop" },
      // Salads
      { name: "Coleslaw", description: "Creamy slaw of cabbage & carrots.", price: "KSH 150", image: coleslaw },
      { name: "Fruit Salad", description: "Seasonal fruit medley, chilled & juicy.", price: "KSH 200", image: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=800&h=600&fit=crop" },
      { name: "Chicken Scissors Salad", description: "Grilled chicken strips over fresh greens.", price: "KSH 600", image: caesarSaladCrispyChicken },
      { name: "Chef Salad", description: "All‑in mix of greens, ham, cheese & egg.", price: "KSH 200", image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&h=600&fit=crop" },
      // Extras
      { name: "Extra Coffee Sachet", description: "Need more caffeine? Add a sachet.", price: "KSH 50", image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&h=600&fit=crop" },
      { name: "Extra Honey", description: "Natural honey shot for your tea.", price: "KSH 50", image: extraHoney },
    ],
  },
  /* --------------------------------------------------- PLATTER */
  {
    id: "platter",
    title: "Platter",
    icon: Utensils,
    gradient: "from-green-500 to-yellow-400",
    items: [
      { name: "Platter 1", description: "Samosa, Choma Sausage, Meat dry fry, Chicken broiler, Portion of roast potatoes, Ugali Portions, Chapatis, Pork chops", price: "KSH 3400", image: platter1 },
      { name: "Platter 2", description: "Portion of vegetable rice, Portion of chicken wings, Meat-wet fry, Portion of stir fried vegetables, Matumbo wet dry, Greens, Portion of ugali, Portion of french fries", price: "KSH 2550", image: platter2 },
      { name: "Platter 3", description: "Portion of fish fingers, Portion of chicken wings, Hot dogs, Portion of french fries, Sodas", price: "KSH 2400", image: platter3 },
   { name: "Platter 4", description: "Nyama choma, Kienyeji Chicken, Gizzard, Ugali portion, Mukimo, Roast potato, Kachumbari", price: "KSH 3250", image: platter4 },
    ],
  },

  
];

const RedCubeMenu = () => {
  const [active, setActive] = useState("mains");
  const [favorites, setFavorites] = useState(new Set());
  const activeCategory = menuData.find((c) => c.id === active);
  const currentCategory = activeCategory || menuData[0];

  const toggleFavorite = (itemName) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(itemName)) {
      newFavorites.delete(itemName);
    } else {
      newFavorites.add(itemName);
    }
    setFavorites(newFavorites);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-red-50">
      {/* Floating BG blobs – left as‑is */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-red-200 rounded-full opacity-20 animate-pulse" />
        <div className="absolute top-60 right-20 w-24 h-24 bg-orange-200 rounded-full opacity-30 animate-bounce" />
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-purple-200 rounded-full opacity-10 animate-pulse" />
      </div>

      {/* Header */}
      <header className="bg-gradient-to-br from-white via-gray-50 to-gray-100 shadow-lg border-b border-gray-200">
        <div className="container mx-auto px-4 py-6 md:py-8 flex justify-center">
          <img
            src="/logo.png"
            alt="Red Cube Logo"
            className="w-44 md:w-52 object-contain drop-shadow-sm animation-heartbeat"
          />
        </div>
      </header>

      {/* Category Nav */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-xl">
        <div className="container mx-auto px-4 py-4">
          <div className="flex overflow-x-auto space-x-3 pb-2 scrollbar-hide pr-4">
            {menuData.map(({ id, title, icon: IconComponent, gradient }) => (
              <button
                key={id}
                onClick={() => setActive(id)}
                className={`flex items-center space-x-3 px-6 py-4 rounded-2xl whitespace-nowrap font-semibold transition-all duration-500 transform hover:scale-105 ${
                  active === id
                    ? `bg-gradient-to-r ${gradient} text-white shadow-2xl scale-105`
                    : "bg-white text-gray-700 hover:bg-gray-50 shadow-lg hover:shadow-xl border border-gray-200"
                }`}
              >
                <IconComponent className="w-5 h-5 shrink-0" />
                <span className="text-sm md:text-base">{title}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Items */}
      <main className="container mx-auto px-4 py-8 md:py-12 max-w-5xl relative">
        {/* Category Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-4 mb-4">
            <currentCategory.icon className="w-8 h-8 md:w-12 md:h-12 text-gray-700" />
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              {currentCategory.title}
            </h2>
          </div>
          <div
            className={`mx-auto h-2 w-24 bg-gradient-to-r ${currentCategory.gradient} rounded-full shadow-lg`}
          />
        </div>

        {/* Items Grid */}
        <div className="grid gap-6 md:gap-8">
          {currentCategory.items.map((item, index) => (
            <article
              key={item.name}
              className={`group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                item.featured ? "ring-2 ring-yellow-400 ring-opacity-50" : ""
              }`}
              style={{
                animationDelay: `${index * 100}ms`,
                animation: "fadeIn 0.6s ease-out forwards",
              }}
            >
              {/* Featured badge */}
              {item.featured && (
                <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg flex items-center space-x-1">
                  <Star className="w-4 h-4 fill-current" />
                  <span>Featured</span>
                </div>
              )}

              {/* Favourite toggle */}
              <button
                onClick={() => toggleFavorite(item.name)}
                className="absolute top-4 right-4 z-10 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all duration-300 transform hover:scale-110"
              >
                <Heart
                  className={`w-5 h-5 transition-colors duration-300 ${
                    favorites.has(item.name)
                      ? "text-red-500 fill-current"
                      : "text-gray-400 hover:text-red-400"
                  }`}
                />
              </button>

              <div className="flex flex-col md:flex-row">
                {/* IMG */}
                <div className="md:w-1/3 w-full h-48 md:h-56 relative overflow-hidden flex-shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent z-10" />
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      style={{ minHeight: '12rem', maxHeight: '14rem', minWidth: '100%', objectFit: 'cover' }}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/placeholder-food.jpg";
                      }}
                    />
                  ) : (
                    <div
                      className={`w-full h-full bg-gradient-to-br ${currentCategory.gradient} flex items-center justify-center`}
                    >
                      <currentCategory.icon className="w-16 h-16 text-white opacity-70" />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="md:w-2/3 p-6 md:p-8 flex flex-col justify-between">
                  <div className="mb-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors duration-300">
                      {item.name}
                    </h3>
                    <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div
                      className={`bg-gradient-to-r ${currentCategory.gradient} text-white px-6 py-3 rounded-2xl shadow-lg transform group-hover:scale-105 transition-all duration-300`}
                    >
                      <span className="text-xl md:text-2xl font-bold">
                        {item.price}
                      </span>
                    </div>

                    <button
                      className="bg-gray-100 hover:bg-red-600 hover:text-white text-gray-700 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                      onClick={() => window.open('tel:0722524264')}
                    >
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white p-8 rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to taste the difference?
            </h3>
            <p className="text-red-100 mb-6 text-lg">
              Visit Red Cube Bar & Restaurant today and experience authentic Kenyan cuisine
            </p>
            <button
              className="bg-white text-red-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-red-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
              onClick={() => window.open('tel:0722524264')}
            >
              Make a Reservation
            </button>
            <div className="mt-3 text-white text-lg font-semibold">
              call 0722524264
            </div>
        
          </div>
        </div>
      </main>

      {/* Utility styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default RedCubeMenu;
