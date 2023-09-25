using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DataAccessLayer.Migrations
{
    public partial class newfeature : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
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

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "_StripePriceID",
                table: "bookcar");

            migrationBuilder.DropColumn(
                name: "_StripeProductId",
                table: "bookcar");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "f607f7ef-01df-4943-b46b-2726091e7697",
                column: "ConcurrencyStamp",
                value: "541dc921-cafa-4f11-97cf-8deb76ff3709");

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "b74ddd14-6340-4840-95c2-db12554843e5",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "52418122-3f14-44ac-aabf-27575f01461f", "AQAAAAIAAYagAAAAEGUWWvN8wew3eZ461K+dkuy1gKcKUufwwPU7uPFMdgYqzz8F5eUu1HhvFjs3M8Ik1w==", "bedb4cca-f81c-4638-a8a7-8dfe1558bd5d" });
        }
    }
}
