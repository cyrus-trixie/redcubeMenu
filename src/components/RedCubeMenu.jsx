
import React, { useState } from "react";
import {
  ChefHat,
  Coffee,
  Utensils,
  Wine,
  Heart,
  Star,
} from "lucide-react";

const menuData = [
  {
    id: "mains",
    title: "Main Dishes",
    icon: ChefHat,
    gradient: "from-orange-400 to-red-500",
    items: [
      {
        name: "Nyama Choma",
        description: "Grilled goat meat served with ugali and sukuma wiki",
        price: "KSH 1,200",
        image: "https://lowcarbafrica.com/wp-content/uploads/2022/10/Nyama-Choma-IG-1.jpg",
        featured: true,
      },
      {
        name: "Tilapia Fish",
        description: "Fresh tilapia from Lake Victoria, grilled with spices",
        price: "KSH 800",
        image: "https://www.kitchenthings.co.nz/media/magefan_blog/bakedfish.jpg",
      },
      {
        name: "Beef Stew",
        description: "Tender beef cooked in rich tomato sauce with vegetables",
        price: "KSH 650",
        image: "https://hips.hearstapps.com/hmg-prod/images/beef-stew-lead-652e94c52e52d.jpg?resize=1200:*",
      },
      {
        name: "Chicken Curry",
        description: "Spiced chicken curry served with rice or chapati",
        price: "KSH 750",
        image: "https://kitchenofdebjani.com/wp-content/uploads/2023/04/easy-indian-chicken-curry-Recipe-for-beginners-Debjanir-rannaghar.jpg",
        featured: true,
      },
      {
        name: "Pilau",
        description: "Aromatic spiced rice with beef or chicken",
        price: "KSH 600",
        image: "https://images.squarespace-cdn.com/content/v1/5a419c0118b27d418cc2e96f/2e31c7ec-7fc8-49bc-ac51-266cf78f1a65/IMG_0369.jpg",
      },
      {
        name: "Githeri Supreme",
        description: "Traditional maize and beans with vegetables and meat",
        price: "KSH 450",
        image: "https://i0.wp.com/gwenjikoni.com/wp-content/uploads/2022/02/IMG_20211028_105848-scaled.jpg?resize=1536%2C827&ssl=1",
      },
    ],
  },
  {
    id: "sides",
    title: "Sides & Accompaniments",
    icon: Utensils,
    gradient: "from-green-400 to-emerald-500",
    items: [
      {
        name: "Ugali",
        description: "Traditional cornmeal staple",
        price: "KSH 150",
        image: "https://images.unsplash.com/photo-1598288597375-9c9e5e7f1f0a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Sukuma Wiki",
        description: "Sautéed collard greens with onions",
        price: "KSH 200",
        image: "https://images.unsplash.com/photo-1601007788481-9b1d9b3a3b0a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Chapati",
        description: "Soft flatbread, perfect with stews",
        price: "KSH 80",
        image: "https://images.unsplash.com/photo-1534033877995-1f9f2b1d6e1f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Rice (White/Brown)",
        description: "Steamed rice, choice of white or brown",
        price: "KSH 180",
        image: "https://images.unsplash.com/photo-1582250767252-03f169f4e2b0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Mukimo",
        description: "Mashed potatoes with greens and maize",
        price: "KSH 250",
        image: "https://images.unsplash.com/photo-1579735071987-9d62888f7253?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Vegetable Samosas",
        description: "Crispy pastries filled with spiced vegetables",
        price: "KSH 300",
        image: "https://images.unsplash.com/photo-1596541223940-271d49f0a5f0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
  },
  {
    id: "beverages",
    title: "Beverages",
    icon: Coffee,
    gradient: "from-blue-400 to-purple-500",
    items: [
      {
        name: "Kenyan Tea",
        description: "Traditional black tea with milk and spices",
        price: "KSH 120",
        image: "https://images.unsplash.com/photo-1616428795550-930f3a67d023?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Coffee",
        description: "Fresh Kenyan coffee, black or with milk",
        price: "KSH 150",
        image: "https://images.unsplash.com/photo-1517228343949-d7b69c6f2a89?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        featured: true,
      },
      {
        name: "Dawa Tea",
        description: "Honey, lemon, ginger tea – perfect for health",
        price: "KSH 180",
        image: "https://images.unsplash.com/photo-1589338002677-4a0b22a2c1d0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Fresh Juice",
        description: "Passion fruit, mango, or orange juice",
        price: "KSH 250",
        image: "https://images.unsplash.com/photo-1526424388330-80a24f2b09eb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Sodas",
        description: "Coca-Cola, Fanta, Sprite, Stoney",
        price: "KSH 100",
        image: "https://images.unsplash.com/photo-1558237951-b8449c25f05b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Mineral Water",
        description: "500 ml bottled water",
        price: "KSH 80",
        image: "https://images.unsplash.com/photo-1546747440-1845bb08ddb3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
  },
  {
    id: "bar",
    title: "Bar Menu",
    icon: Wine,
    gradient: "from-purple-400 to-pink-500",
    items: [
      {
        name: "Tusker Beer",
        description: "Kenya's premium lager beer",
        price: "KSH 300",
        image: "https://www.oaks.delivery/wp-content/uploads/2017/09/blog-covers-21-1024x614.jpg",
      },
      {
        name: "White Cap Beer",
        description: "Classic Kenyan beer",
        price: "KSH 280",
        image: "https://greenspoon.co.ke/wp-content/uploads/2023/02/Greenspoon-Kenya-White-cap.jpg",
      },
      {
        name: "Wine (Red/White)",
        description: "House wine selection by the glass",
        price: "KSH 450",
        image: "https://static.millesima.com/s3/attachements/editorial/h630px/red-wine-types.jpg",
        featured: true,
      },
      {
        name: "Whiskey",
        description: "Selection of local and imported whiskey",
        price: "KSH 600",
        image: "https://www.oaks.delivery/wp-content/uploads/Jack-Daniels-Honey-Whiskey-1-1600x900-1-1200x900-cropped.webp",
      },
      {
        name: "Vodka",
        description: "Premium vodka selection",
        price: "KSH 550",
        image: "https://greenspoon.co.ke/wp-content/uploads/2022/10/Greenspoon-Kenya-Leleshwa-Vodka-750ml.jpg",
      },
      {
        name: "Cocktails",
        description: "Signature mixed drinks and classics",
        price: "KSH 700",
        image: "https://familyapp.com/wp-content/uploads/2021/07/summer_cocktails.jpg",
      },
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
      {/* Floating Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-red-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-60 right-20 w-24 h-24 bg-orange-200 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-purple-200 rounded-full opacity-10 animate-pulse"></div>
      </div>

      {/* Header */}
   <header className="bg-gradient-to-br from-white via-gray-50 to-gray-100 shadow-lg border-b border-gray-200">
        <div className="container mx-auto px-4 py-6 md:py-8 flex justify-center">
          {/* Add animation-heartbeat class here */}
          <img
            src="/logo.png"
            alt="Red Cube Logo"
            className="w-44 md:w-52 object-contain drop-shadow-sm animation-heartbeat"
          />
        </div>
      </header>
      {/* Category Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-xl">
        <div className="container mx-auto px-4 py-4">
          <div className="flex overflow-x-auto space-x-3 pb-2 scrollbar-hide">
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

      {/* Menu Items */}
      <main className="container mx-auto px-4 py-8 md:py-12 max-w-5xl relative">
        {/* Category Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-4 mb-4">
            <currentCategory.icon className="w-8 h-8 md:w-12 md:h-12 text-gray-700" />
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              {currentCategory.title}
            </h2>
          </div>
          <div className={`mx-auto h-2 w-24 bg-gradient-to-r ${currentCategory.gradient} rounded-full shadow-lg`} />
        </div>

        {/* Items Grid */}
        <div className="grid gap-6 md:gap-8">
          {currentCategory.items.map((item, index) => (
            <article
              key={item.name}
              className={`group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                item.featured ? 'ring-2 ring-yellow-400 ring-opacity-50' : ''
              }`}
              style={{
                animationDelay: `${index * 100}ms`,
                animation: 'fadeIn 0.6s ease-out forwards'
              }}
            >
              {/* Featured Badge */}
              {item.featured && (
                <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg flex items-center space-x-1">
                  <Star className="w-4 h-4 fill-current" />
                  <span>Featured</span>
                </div>
              )}

              {/* Favorite Button */}
              <button
                onClick={() => toggleFavorite(item.name)}
                className="absolute top-4 right-4 z-10 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all duration-300 transform hover:scale-110"
              >
                <Heart
                  className={`w-5 h-5 transition-colors duration-300 ${
                    favorites.has(item.name)
                      ? 'text-red-500 fill-current'
                      : 'text-gray-400 hover:text-red-400'
                  }`}
                />
              </button>

              <div className="flex flex-col md:flex-row">
                {/* Image Section */}
                <div className="md:w-1/3 h-48 md:h-auto relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent z-10"></div>
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = `/placeholder-food.jpg`;
                      }}
                    />
                  ) : (
                    <div className={`w-full h-full bg-gradient-to-br ${currentCategory.gradient} flex items-center justify-center`}>
                      <currentCategory.icon className="w-16 h-16 text-white opacity-70" />
                    </div>
                  )}
                </div>

                {/* Content Section */}
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
                    <div className={`bg-gradient-to-r ${currentCategory.gradient} text-white px-6 py-3 rounded-2xl shadow-lg transform group-hover:scale-105 transition-all duration-300`}>
                      <span className="text-xl md:text-2xl font-bold">
                        {item.price}
                      </span>
                    </div>
                    
                    <button className="bg-gray-100 hover:bg-red-600 hover:text-white text-gray-700 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white p-8 rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to taste the difference?
            </h3>
            <p className="text-red-100 mb-6 text-lg">
              Visit Red Cube Bar & Restaurant today and experience authentic Kenyan cuisine
            </p>
            <button className="bg-white text-red-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-red-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Make a Reservation
            </button>
          </div>
        </div>
      </main>

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
