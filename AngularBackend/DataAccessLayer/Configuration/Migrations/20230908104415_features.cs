using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DataAccessLayer.Migrations
{
    public partial class features : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "_StripePriceID",
                table: "bookcar");

            migrationBuilder.DropColumn(
                name: "_StripeProductId",
                table: "bookcar");

            migrationBuilder.CreateTable(
                name: "userTotalRent",
                columns: table => new
                {
                    id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    UserName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    TotalRent = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    _StripePriceID = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    _StripeProductId = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_userTotalRent", x => x.id);
                });

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "f607f7ef-01df-4943-b46b-2726091e7697",
                column: "ConcurrencyStamp",
                value: "ed863315-107e-4d9c-a42d-37a67abeff51");

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "b74ddd14-6340-4840-95c2-db12554843e5",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "42e1220f-8cd7-424d-9d80-2a228dd07a71", "AQAAAAIAAYagAAAAEDayuce4QkM0k5/eO/4tiO7APQ7PLTYKamVPEPxjvFhIbhVJc/pFkgOaXGcZkZOBSg==", "a83ea7df-5fb3-4599-a4b5-2853d42deb44" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "userTotalRent");

            migrationBuilder.AddColumn<string>(
                name: "_StripePriceID",
                table: "bookcar",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "_StripeProductId",
                table: "bookcar",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "f607f7ef-01df-4943-b46b-2726091e7697",
                column: "ConcurrencyStamp",
                value: "dfd80ef7-3587-4f3c-89e9-d7a570b4e978");

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "b74ddd14-6340-4840-95c2-db12554843e5",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "cec5eaab-d1b2-4a3e-9978-76f5e7c42f96", "AQAAAAIAAYagAAAAEMkThJbM3kHnjKKsfW8KbcU3x4H4CGbdOtSAv+SZlChgBZx+fsOWa1F8lxf2el4cag==", "58d429ba-1713-437b-b62b-24929ca53772" });
        }
    }
}
