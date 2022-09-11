// Generate an picture tag with image src URLs which use Neltify image transforms

module.exports = (ImageName, ImageAlt) => {
  return `<picture>
            <source srcset="/assets/img/uploads/${ImageName}" media="(min-width: 769px)">
            <source srcset="/assets/img/uploads/${ImageName}?nf_resize=fit&w=1024" media="(min-width: 481px)">

            <img src="/assets/img/uploads/${ImageName}?nf_resize=fit&w=768" alt="${ImageAlt}" />
          </picture>`;
};
