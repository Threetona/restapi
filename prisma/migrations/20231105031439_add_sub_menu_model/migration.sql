-- CreateTable
CREATE TABLE "SubMenu" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "icon" TEXT,
    "ordering" INTEGER NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "menuId" INTEGER NOT NULL,

    CONSTRAINT "SubMenu_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SubMenu2" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "icon" TEXT,
    "ordering" INTEGER NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "subMenuId" INTEGER NOT NULL,

    CONSTRAINT "SubMenu2_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SubMenu3" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "icon" TEXT,
    "ordering" INTEGER NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "subMenu2Id" INTEGER NOT NULL,

    CONSTRAINT "SubMenu3_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Permission" (
    "id" SERIAL NOT NULL,
    "roleId" INTEGER NOT NULL,
    "menuId" INTEGER NOT NULL,

    CONSTRAINT "Permission_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SubMenu_name_key" ON "SubMenu"("name");

-- CreateIndex
CREATE UNIQUE INDEX "SubMenu2_name_key" ON "SubMenu2"("name");

-- CreateIndex
CREATE UNIQUE INDEX "SubMenu3_name_key" ON "SubMenu3"("name");

-- AddForeignKey
ALTER TABLE "SubMenu" ADD CONSTRAINT "SubMenu_menuId_fkey" FOREIGN KEY ("menuId") REFERENCES "Menu"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubMenu2" ADD CONSTRAINT "SubMenu2_subMenuId_fkey" FOREIGN KEY ("subMenuId") REFERENCES "SubMenu"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubMenu3" ADD CONSTRAINT "SubMenu3_subMenu2Id_fkey" FOREIGN KEY ("subMenu2Id") REFERENCES "SubMenu2"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Permission" ADD CONSTRAINT "Permission_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Permission" ADD CONSTRAINT "Permission_menuId_fkey" FOREIGN KEY ("menuId") REFERENCES "Menu"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
