import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #2f7cff 0%, #8b5cf6 100%)",
          borderRadius: 6,
          color: "#f3f4f6",
          fontSize: 20,
          fontWeight: 700,
        }}
      >
        N
      </div>
    ),
    { ...size }
  );
}
