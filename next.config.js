/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "pngimg.com" },
      { hostname: "cdn1.brandability.co.za" },
      { hostname: "media.istockphoto.com" },
      { hostname: "youneedit.pl" },
      { hostname: "live.staticflickr.com" },
      { hostname: "purepng.com" },
      { hostname: "www.pinclipart.com" },
      { hostname: "www.robertoverino.com" },
      { hostname: "i.pinimg.com" },
      { hostname: "qph.fs.quoracdn.net" },
      { hostname: "s3.weddbook.me" },
      { hostname: "4.bp.blogspot.com" },
      { hostname: "picture-cdn.wheretoget.it" },
      { hostname: "bbn.ng" },
      { hostname: "www.dresscodes.dk" },
      { hostname: "pc-ap.renttherunway.com" },
      {
        hostname:
          "999c4e8baaa44dc2ec2f-c0b4f7ce83693fe0789a6fdd9b32d121.ssl.cf2.rackcdn.com",
      },
      { hostname: "cdnb.lystit.com" },
      { hostname: "assetsprx.matchesfashion.com" },
      { hostname: "image27.stylesimo.com" },
      { hostname: "manzara.b-cdn.net" },
      { hostname: "tollwear.gr" },
      { hostname: "images.sellbrite.com" },
      { hostname: "meteew.com" },
    ],
  },
};

module.exports = nextConfig;
