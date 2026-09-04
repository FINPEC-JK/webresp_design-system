Fullscreen modal for reviewing one photo at a time — wraps `ImageViewer` (zoom/pan + bounding boxes) with a dark scrim, title/subtitle header, and prev/next navigation. Closes on scrim click, the × button, or Escape; arrow keys navigate when `onPrev`/`onNext` are given.

```jsx
{active && (
  <Lightbox
    src={active.url} title={active.curral} sub={active.id}
    boxes={active.boxes} badge="needs_review" badgeTone="warn"
    onClose={() => setActive(null)}
    onPrev={() => setActive(prevOf(active))}
    onNext={() => setActive(nextOf(active))}
  />
)}
```

Mount conditionally at the root of your screen (it's `position: fixed`). Pair with `ImageThumb`'s `onClick` to open it from a grid.
