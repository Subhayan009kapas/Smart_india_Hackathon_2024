// src/WebGLBackground.jsx

import React, { useEffect } from "react";
import "./webGL.css"; // Make sure to create this CSS file

const WebGLBackground = () => {
  useEffect(() => {
    const canvas = document.getElementById("canvas");
    const gl = canvas.getContext("webgl");

    if (!gl) {
      console.error("Unable to initialize WebGL.");
      return;
    }

    // Set the canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Create shader programs
    const vertexShaderSource = `
      attribute vec2 position;
      void main() {
        gl_Position = vec4(position, 0, 1);
        gl_PointSize = 10.0; // Size of the points
      }
    `;

    const fragmentShaderSource = `
      precision mediump float;
      uniform vec4 color;
      void main() {
        gl_FragColor = color; // Color of the points
      }
    `;

    // Compile shaders
    const compileShader = (source, type) => {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        return shader;
      } else {
        console.error(gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
      }
    };

    const vertexShader = compileShader(vertexShaderSource, gl.VERTEX_SHADER);
    const fragmentShader = compileShader(fragmentShaderSource, gl.FRAGMENT_SHADER);

    // Create shader program
    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    gl.useProgram(program);

    // Create buffer for the points
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

    // Generate random points
    const numPoints = 100;
    const points = new Float32Array(numPoints * 2);
    for (let i = 0; i < numPoints; i++) {
      points[i * 2] = Math.random() * 2 - 1; // X between -1 and 1
      points[i * 2 + 1] = Math.random() * 2 - 1; // Y between -1 and 1
    }

    gl.bufferData(gl.ARRAY_BUFFER, points, gl.STATIC_DRAW);

    // Bind position attribute
    const positionLocation = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    // Set the color uniform
    const colorLocation = gl.getUniformLocation(program, "color");

    const draw = () => {
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);

      for (let i = 0; i < numPoints; i++) {
        // Update color for each point
        const color = [
          Math.random(),
          Math.random(),
          Math.random(),
          1.0,
        ];
        gl.uniform4fv(colorLocation, color);
        
        // Draw point
        gl.drawArrays(gl.POINTS, i, 1);
      }

      requestAnimationFrame(draw);
    };

    draw();

    const onWindowResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };

    window.addEventListener("resize", onWindowResize);

    return () => {
      window.removeEventListener("resize", onWindowResize);
    };
  }, []);

  return (
    <canvas
      id="canvas"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
        width: "100%",
        height: "100%",
      }}
    />
  );
};

export default WebGLBackground;
