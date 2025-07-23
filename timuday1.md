# 三阶行列式练习题集（完美渲染版）  
**说明**：本文档采用**标准Markdown+LaTeX格式**，可在**Typora、Obsidian、GitHub**等支持MathJax的编辑器中**完美渲染**。所有公式均用正确分隔符包裹，语法严格遵循LaTeX规范。


## 目录  
1. [基础型 - 含单未知数](#1-基础型---含单未知数)  
2. [基础型 - 含分数参数](#2-基础型---含分数参数)  
3. [齐次线性方程组非零解条件](#3-齐次线性方程组非零解条件)  
4. [向量组线性相关的行列式判定](#4-向量组线性相关的行列式判定)  
5. [对称结构行列式（双未知数）](#5-对称结构行列式双未知数)  


---

<a id="1-基础型---含单未知数"></a >
### 1. 基础型 - 含单未知数  
**题目**：计算行列式并解关于 \(x\) 的方程：  

$$
\begin{vmatrix}
x & 1 & 1 \\
1 & x & 1 \\
1 & 1 & x
\end{vmatrix} = 0
$$

<details>
<summary>🔍 查看解答</summary>

#### 解答步骤：  
1. **行列式计算（沙路法）**：  
   三阶行列式的沙路法展开为：  
   $$
   D = x \cdot x \cdot x + 1 \cdot 1 \cdot 1 + 1 \cdot 1 \cdot 1 - 1 \cdot x \cdot 1 - 1 \cdot 1 \cdot x - x \cdot 1 \cdot 1
   $$  
   化简得：  
   $$
   D = x^3 + 2 - 3x = x^3 - 3x + 2
   $$  

2. **解方程**：  
   令 \(D = 0\)，对多项式因式分解：  
   $$
   (x-1)^2(x+2) = 0
   $$  

   **解**：\(x_1 = x_2 = 1\)，\(x_3 = -2\)。  
</details>


---

<a id="2-基础型---含分数参数"></a >
### 2. 基础型 - 含分数参数  
**题目**：计算行列式并解关于 \(\lambda\) 的方程：  

$$
\begin{vmatrix}
\lambda & \dfrac{1}{2} & 0 \\
\dfrac{1}{2} & \lambda & \dfrac{1}{2} \\
0 & \dfrac{1}{2} & \lambda
\end{vmatrix} = 0
$$

<details>
<summary>🔍 查看解答</summary>

#### 解答步骤：  
1. **行列式计算（按第一行展开）**：  
   按第一行元素展开，每一项为元素乘以其代数余子式：  
   $$
   D = \lambda \cdot \begin{vmatrix} \lambda & \dfrac{1}{2} \\ \dfrac{1}{2} & \lambda \end{vmatrix} - \dfrac{1}{2} \cdot \begin{vmatrix} \dfrac{1}{2} & \dfrac{1}{2} \\ 0 & \lambda \end{vmatrix} + 0 \cdot \begin{vmatrix} \dfrac{1}{2} & \lambda \\ 0 & \dfrac{1}{2} \end{vmatrix}
   $$  
   计算子行列式：  
   $$
   D = \lambda\left(\lambda^2 - \dfrac{1}{4}\right) - \dfrac{1}{2}\left(\dfrac{1}{2}\lambda - 0\right) = \lambda^3 - \dfrac{1}{4}\lambda - \dfrac{1}{4}\lambda = \lambda^3 - \dfrac{1}{2}\lambda
   $$  

2. **解方程**：  
   令 \(D = 0\)，提取公因子：  
   $$
   \lambda\left(\lambda^2 - \dfrac{1}{2}\right) = 0
   $$  

   **解**：\(\lambda_1 = 0\)，\(\lambda_2 = \dfrac{\sqrt{2}}{2}\)，\(\lambda_3 = -\dfrac{\sqrt{2}}{2}\)。  
</details>


---

<a id="3-齐次线性方程组非零解条件"></a >
### 3. 齐次线性方程组非零解条件  
**题目**：已知齐次线性方程组：  

$$
\begin{cases}
\lambda x + y + z = 0 \\
x + \lambda y + z = 0 \\
x + y + \lambda z = 0
\end{cases}
$$  
有非零解（即 \(x, y, z\) 不全为0），求 \(\lambda\) 的值。  

**提示**：齐次方程组有非零解的充要条件是**系数行列式为0**。

<details>
<summary>🔍 查看解答</summary>

#### 解答步骤：  
1. **构造系数行列式**：  
   方程组的系数矩阵行列式为：  
   $$
   D = \begin{vmatrix}
   \lambda & 1 & 1 \\
   1 & \lambda & 1 \\
   1 & 1 & \lambda
   \end{vmatrix}
   $$  

2. **计算行列式（行列性质化简）**：  
   - 将第2、3行加到第1行，提取公因子 \(\lambda + 2\)：  
     $$
     D = (\lambda + 2) \begin{vmatrix}
     1 & 1 & 1 \\
     1 & \lambda & 1 \\
     1 & 1 & \lambda
     \end{vmatrix}
     $$  
   - 将第1行的-1倍加到第2、3行，化为上三角行列式：  
     $$
     D = (\lambda + 2) \begin{vmatrix}
     1 & 1 & 1 \\
     0 & \lambda-1 & 0 \\
     0 & 0 & \lambda-1
     \end{vmatrix} = (\lambda + 2)(\lambda - 1)^2
     $$  

3. **解方程**：  
   令 \(D = 0\)，得：  
   $$
   (\lambda + 2)(\lambda - 1)^2 = 0
   $$  

   **解**：\(\lambda = -2\) 或 \(\lambda = 1\)。  
</details>


---

<a id="4-向量组线性相关的行列式判定"></a >
### 4. 向量组线性相关的行列式判定  
**题目**：设向量
$$ (\vec{\alpha}_1 = (1, 2, 3))，(\vec{\alpha}_2 = (k, 1, 0))，(\vec{\alpha}_3 = (2, 3, 1))。$$若齐次线性方程组：  

$$
x\vec{\alpha}_1 + y\vec{\alpha}_2 + z\vec{\alpha}_3 = \vec{0}
$$  
有非零解（即 \(x, y, z\) 不全为0），求 \(k\) 的值。  

**提示**：向量组线性相关的充要条件是**其构成的行列式为0**（向量作为矩阵的行或列）。

<details>
<summary>🔍 查看解答</summary>

#### 解答步骤：  
1. **构造行列式**：  
   将向量作为矩阵的**行**，构造三阶行列式：  
   $$
   D = \begin{vmatrix}
   1 & 2 & 3 \\
   k & 1 & 0 \\
   2 & 3 & 1
   \end{vmatrix}
   $$  

2. **按第二行展开计算**：  
   第二行元素为 \(k, 1, 0\)，对应的**代数余子式**（符号为 \((-1)^{i+j}\)，\(i\) 为行号，\(j\) 为列号）为：  
   $$
   D = k \cdot (-1)^{2+1} \cdot \begin{vmatrix}2 & 3 \\ 3 & 1\end{vmatrix} + 1 \cdot (-1)^{2+2} \cdot \begin{vmatrix}1 & 3 \\ 2 & 1\end{vmatrix} + 0 \cdot (-1)^{2+3} \cdot \begin{vmatrix}1 & 2 \\ 2 & 3\end{vmatrix}
   $$  

   计算余子式（去掉所在行和列后的二阶行列式）：  
   - \(\begin{vmatrix}2 & 3 \\ 3 & 1\end{vmatrix} = 2 \times 1 - 3 \times 3 = -7\)  
   - \(\begin{vmatrix}1 & 3 \\ 2 & 1\end{vmatrix} = 1 \times 1 - 3 \times 2 = -5\)  

   代入代数余子式计算：  
   $$
   D = k \cdot (-1) \cdot (-7) + 1 \cdot 1 \cdot (-5) + 0 = 7k - 5
   $$  

3. **解方程**：  
   向量组线性相关 ⇒ 行列式 \(D = 0\)，即：  
   $$
   7k - 5 = 0
   $$  

   **解**：  
   $$
   k = \dfrac{5}{7}
   $$  
</details>


---

<a id="5-对称结构行列式双未知数"></a >
### 5. 对称结构行列式（双未知数）  
**题目**：计算行列式并解关于 \(a, b\) 的方程：  

$$
\begin{vmatrix}
a & b & b \\
b & a & b \\
b & b & a
\end{vmatrix} = 0
$$

<details>
<summary>🔍 查看解答</summary>

#### 解答步骤：  
1. **行列式计算（对称结构化简）**：  
   该行列式主对角线为 \(a\)，其余为 \(b\)，通过**行列加法**简化：  
   - 将第2、3列加到第1列，提取公因子 \(a + 2b\)：  
     $$
     D = \begin{vmatrix}
     a+2b & b & b \\
     a+2b & a & b \\
     a+2b & b & a
     \end{vmatrix} = (a + 2b) \begin{vmatrix}
     1 & b & b \\
     1 & a & b \\
     1 & b & a
     \end{vmatrix}
     $$  
   - 将第1行的-1倍加到第2、3行，化为上三角行列式：  
     $$
     D = (a + 2b) \begin{vmatrix}
     1 & b & b \\
     0 & a-b & 0 \\
     0 & 0 & a-b
     \end{vmatrix} = (a + 2b)(a - b)^2
     $$  

2. **解方程**：  
   令 \(D = 0\)，得：  
   $$
   (a + 2b)(a - b)^2 = 0
   $$  

   **解**：  
   - \(a + 2b = 0\) ⇒ \(a = -2b\)（\(b\) 为任意实数）；  
   - \((a - b)^2 = 0\) ⇒ \(a = b\)（\(b\) 为任意实数）。  
</details>


---

## 关键知识点总结  
| 题型                | 核心技巧                              | 应用场景                  |
|---------------------|---------------------------------------|---------------------------|
| 基础行列式计算      | 沙路法、按行/列展开                   | 解方程                    |
| 齐次方程组非零解    | 系数行列式为0                          | 线性方程组理论            |
| 向量组线性相关      | 向量构成的行列式为0                    | 向量空间理论              |
| 对称结构行列式      | 行列加法提取公因子、化为三角行列式      | 简化高次方程求解          |


## 渲染验证说明  
1. **Typora**：直接复制本文档内容，保存为`.md`文件，打开后即可看到完美渲染的公式；  
2. **GitHub**：将本文档上传至GitHub仓库，GitHub会自动渲染Markdown中的LaTeX公式；  
3. **Obsidian**：在「设置」→「外观」→「MathJax」中开启「自动渲染」，即可显示公式。  


**复制说明**：直接复制代码块中的**全部内容**（包括反引号），粘贴到你的Markdown文件中，即可保留所有格式和公式。若需调整样式（如颜色、字体），可在编辑器中修改主题设置。  

希望这套题能帮助你熟练掌握三阶行列式的计算与应用！ 🚀