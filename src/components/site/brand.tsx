import horizontalDark from "@/assets/logo-horizontal-dark.png.asset.json";
import horizontalLight from "@/assets/logo-horizontal-light.png.asset.json";
import stackedDark from "@/assets/logo-stacked-dark.png.asset.json";
import stackedLight from "@/assets/logo-stacked-light.png.asset.json";
import monogramDark from "@/assets/monogram-dark.png.asset.json";
import monogramLight from "@/assets/monogram-light.png.asset.json";

/**
 * Kit da marca Ribeiro Avelar.
 * "on" indica o fundo em que a versão deve ser aplicada:
 * light  -> off-white / areia   (marca em verde profundo)
 * dark   -> verde profundo      (marca reversa em off-white)
 */
export const brandAssets = {
  horizontal: { light: horizontalDark.url, dark: horizontalLight.url },
  stacked: { light: stackedDark.url, dark: stackedLight.url },
  monogram: { light: monogramDark.url, dark: monogramLight.url },
};

type LogoProps = {
  variant?: "horizontal" | "stacked" | "monogram";
  on?: "light" | "dark";
  className?: string;
};

export function Logo({ variant = "horizontal", on = "light", className }: LogoProps) {
  return (
    <img
      src={brandAssets[variant][on]}
      alt="Ribeiro Avelar Advogados"
      className={className}
      loading="lazy"
      decoding="async"
    />
  );
}
