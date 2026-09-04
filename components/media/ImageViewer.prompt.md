Pan/zoom viewer for a single image — mouse wheel zooms, drag pans, toolbar shows zoom % with +/-/reset. `boxes` draws percent-based bounding-box overlays with small tags, the pattern FOXE uses to show cattle-count detections over a drone photo.

```jsx
<ImageViewer
  src="/photos/CF-028.jpg"
  badge="Concluído" badgeTone="ok"
  boxes={[{ x: 20, y: 12, w: 14, h: 22, label: "0.98" }, { x: 44, y: 38, w: 12, h: 20 }]}
  height={420}
/>
```

Use inside a `Card` or a `Lightbox`. Pass `onClose` only when using the viewer standalone (outside a Lightbox that already has its own close button).
