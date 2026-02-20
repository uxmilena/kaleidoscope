precision highp float;

uniform sampler2D uTex;
uniform float uTime;
uniform float uRefraction;
uniform float uDispersion;
uniform float uFrost;
uniform float uDebug;

varying vec2 vUv;

float hash(vec2 p){
  p = fract(p*vec2(123.34, 456.21));
  p += dot(p, p+45.32);
  return fract(p.x*p.y);
}

float noise(vec2 p){
  vec2 i = floor(p);
  vec2 f = fract(p);
  float a = hash(i);
  float b = hash(i + vec2(1.0,0.0));
  float c = hash(i + vec2(0.0,1.0));
  float d = hash(i + vec2(1.0,1.0));
  vec2 u = f*f*(3.0-2.0*f);
  return mix(a,b,u.x) + (c-a)*u.y*(1.0-u.x) + (d-b)*u.x*u.y;
}

vec3 frostySample(vec2 uv, float amt){
  vec3 col = texture2D(uTex, uv).rgb;
  if(amt < 0.001) return col;

  float r = 0.004 * amt;
  col += texture2D(uTex, uv + vec2( r, 0.0)).rgb;
  col += texture2D(uTex, uv + vec2(-r, 0.0)).rgb;
  col += texture2D(uTex, uv + vec2(0.0,  r)).rgb;
  col += texture2D(uTex, uv + vec2(0.0, -r)).rgb;
  return col * 0.2;
}

void main(){
  vec2 uv = vUv;

  // circular mask
  vec2 p = uv - 0.5;
  float rr = length(p) * 2.0;
  float mask = 1.0 - smoothstep(0.98, 1.02, rr);

  // DEBUG: if you ever need to confirm the layer is present
  if (uDebug > 0.5) {
    gl_FragColor = vec4(1.0, 0.0, 0.6, 0.35) * mask;
    return;
  }

  float fresnel = pow(clamp(rr, 0.0, 1.0), 2.4);

  float n1 = noise(uv*4.0 + uTime*0.18);
  float n2 = noise(uv*9.0  - uTime*0.20);

  vec2 disp = (vec2(n1, n2) - 0.5) * uRefraction * (0.03 + fresnel * 1.15);

  float chroma = uDispersion * (0.10 + fresnel);

  vec3 col;
  col.r = frostySample(uv + disp + vec2(chroma, 0.0), uFrost).r;
  col.g = frostySample(uv + disp, uFrost).g;
  col.b = frostySample(uv + disp - vec2(chroma, 0.0), uFrost).b;

  col += vec3(1.0) * fresnel * 0.08;

  col *= mask;
  gl_FragColor = vec4(col, mask);
}
