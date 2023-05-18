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
      image: 'img1.jpg',
    },
    {
      id: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e56',
      name: 'Canon EOS 5D',
      price: 5000,
      oldPrice: 6500,
      description: 'Professional camera, solid build',
      image: 'img2.jpg',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17258',
      name: 'Canon R',
      price: 3000,
      oldPrice: 3500,
      description: 'Professional camera, we technology',
      image: 'img3.jpg',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17259',
      name: 'Nikon D50',
      price: 2000,
      oldPrice: 4000,
      description: 'Cheap, ideal for beginners',
      image: 'img4.jpg',
    },
    {
      id: '01c7599d-318b-4b9f-baf7-51f3a936a2d4',
      name: 'Leica q2',
      price: 5000,
      oldPrice: 5500,
      description: 'Small, compact, innovative',
      image: 'img5.jpg',
    },
  ];
}

function getImages() {
  return [
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17263',
      image: 'img1.jpg',
      productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17256',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17264',
      image: 'img2.jpg',
      productId: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e56',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17265',
      image: 'img3.jpg',
      productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17258',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17266',
      image: 'img4.jpg',
      productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17259',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17267',
      image: 'img5.jpg',
      productId: '01c7599d-318b-4b9f-baf7-51f3a936a2d4',
    },
  ];
}

async function seed() {
  await Promise.all(
    getProducts().map((product) => {
      return db.product.create({ data: product });
    }),
  );

  await Promise.all(
    getImages().map((image) => {
      return db.imgs.create({ data: image });
    }),
  );
}

seed();
