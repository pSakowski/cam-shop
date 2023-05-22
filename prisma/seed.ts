import { PrismaClient } from '@prisma/client';

const db = new PrismaClient();

function getProducts() {
  return [
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17256',
      name: 'Canon EOS 50D',
      price: 2000,
      oldPrice: 3000,
      description: 'Cheap, ideal for beginners',
      image: '/img/products/1.jpg',
    },
    {
      id: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e56',
      name: 'Canon EOS 5D',
      price: 5000,
      oldPrice: 6500,
      description: 'Professional camera, solid build',
      image: '/img/products/2.jpg',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17257',
      name: 'Canon R',
      price: 3000,
      oldPrice: 3500,
      description: 'Professional camera, new technology',
      image: '/img/products/3.jpg',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17258',
      name: 'Nikon D50',
      price: 2000,
      oldPrice: 4000,
      description: 'Cheap, ideal for beginners',
      image: '/img/products/4.jpg',
    },
    {
      id: '01c7599d-318b-4b9f-baf7-51f3a936a2d4',
      name: 'Leica M10',
      price: 5000,
      oldPrice: 5500,
      description: 'Small, compact, innovative',
      image: '/img/products/5.jpg',
    },
  ];
}

function getOrders() {
  return [
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17260',
      productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17256',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17261',
      productId: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e56',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17262',
      productId: '01c7599d-318b-4b9f-baf7-51f3a936a2d4',
    },
  ];
}

async function seed() {
  try {
    await Promise.all(
      getProducts().map((product) => {
        return db.product.create({ data: product });
      }),
    );

    await Promise.all(
      getOrders().map((order) => {
        return db.order.create({ data: order });
      }),
    );

    console.log('Products and orders have been successfully seeded.');
  } catch (error) {
    console.error(error);
  } finally {
    await db.$disconnect();
  }
}

seed();
