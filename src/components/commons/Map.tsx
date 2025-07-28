import Script from "next/script";
import { useEffect, useRef, useState } from "react";

const KAKAO_MAP_APPKEY = "e2d7c8b68efe64ebe1e6e25cad09b5d9";

export default function KakaoMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  useEffect(() => {
    if (!isScriptLoaded) return;

    const { kakao } = window as any;

    // maps 로딩 완료 후 실행
    kakao.maps.load(() => {
      const geocoder = new kakao.maps.services.Geocoder();

      geocoder.addressSearch(
        "경기 의정부시 배꽃길 7",
        (result: any, status: string) => {
          if (status === kakao.maps.services.Status.OK) {
            const coords = new kakao.maps.LatLng(result[0].y, result[0].x);

            const map = new kakao.maps.Map(mapRef.current, {
              center: coords,
              level: 3,
            });

            new kakao.maps.Marker({
              map: map,
              position: coords,
            });
          } else {
            console.error("주소 검색 실패", status);
          }
        }
      );
    });
  }, [isScriptLoaded]);

  return (
    <>
      <Script
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_MAP_APPKEY}&autoload=false&libraries=services`}
        strategy="afterInteractive"
        onLoad={() => setIsScriptLoaded(true)}
      />
      <div ref={mapRef} style={{ width: "290px", height: "200px" }} />
    </>
  );
}
